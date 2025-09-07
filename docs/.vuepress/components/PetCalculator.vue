<!-- Pet Calculator Component -->
<template>
  <div class="pet-calculator">
    <div class="calculator-form">
      <h3>🔰 宠物掉档计算</h3>

      <!-- 宠物种类选择 -->
      <div class="form-group">
        <label>宠物种类：</label>
        <select v-model="petType" @change="updateSelectedPetName">
          <option value="">请选择宠物种类</option>
          <option v-for="pet in petTypes" :key="pet.id" :value="pet.id">
            {{ pet.name }}
          </option>
        </select>
      </div>

      <!-- 等级输入 -->
      <div class="form-group">
        <label>等级：</label>
        <input type="number" v-model="level" min="1" max="200" />
      </div>

      <!-- 基础属性输入 -->
      <div class="stats-row">
        <div class="form-group">
          <label>体力：</label>
          <input type="number" v-model="stats.hp" />
        </div>
        <div class="form-group">
          <label>魔法：</label>
          <input type="number" v-model="stats.mag" />
        </div>
        <div class="form-group">
          <label>力量：</label>
          <input type="number" v-model="stats.str" />
        </div>
        <div class="form-group">
          <label>防御：</label>
          <input type="number" v-model="stats.def" />
        </div>
        <div class="form-group">
          <label>敏捷：</label>
          <input type="number" v-model="stats.agi" />
        </div>
      </div>

      <!-- 计算按钮 -->
      <div class="form-actions">
        <button
          class="primary-button"
          @click="calculateBP"
          :disabled="!isFormValid"
        >
          计算掉档
        </button>
        <button class="secondary-button" @click="reset">重置</button>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>

    <!-- 计算结果 -->
    <div v-if="showResults && !error" class="calculator-results">
      <div class="input-summary">
        <h4>输入资料:</h4>
        <div class="command-text">
          {{ selectedPetName }} {{ level }} {{ stats.hp }} {{ stats.str }}
          {{ stats.def }} {{ stats.agi }} {{ stats.mag }}
        </div>
      </div>

      <div class="pet-info">
        <div class="info-row">
          <span class="label">宠物名称:</span>
          <span class="value">{{ selectedPetName }}</span>
        </div>
        <div class="info-row">
          <span class="label">成长类型:</span>
          <span class="value growth-type" :class="selectedPet?.growthType">
            {{ getGrowthTypeDisplay(selectedPet?.growthType) }}
          </span>
        </div>
        <div class="info-row">
          <span class="label">宠物总档次:</span>
          <span class="value">{{ results.baseStats }}</span>
          <span
            class="growth-bonus"
            v-if="selectedPet?.growthType !== 'normal'"
          >
            (成长加成: {{ getGrowthBonus(selectedPet?.growthType) }})
          </span>
        </div>
      </div>

      <div class="calculation-results">
        <h4>===计算结果===</h4>
        <div class="results-text" v-if="results.combinations > 100">
          (共有 {{ results.combinations }} 个结果，超过
          100个组合，不显示详细结果)
        </div>
        <div class="stat-order">分布是 血 攻 防 敏 魔 顺序</div>

        <div class="drop-range">
          <div class="total-drop">总掉档: {{ results.totalDropRange }}</div>
          <div class="drop-possibilities">
            掉档可能解范围: {{ results.dropRanges }}
          </div>
        </div>
      </div>

      <div class="command-help">
        <h4>==</h4>
        <div class="help-text">
          指令: /掉档 宠物名称 &lt;等级(一级可不写)&gt; 血 魔 攻 防 敏
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Stat, GrowRange } from '../lib/PetCalc';
  import { pets } from '../lib/PetsData';

  export default {
    name: 'PetCalculator',
    data() {
      return {
        petType: '',
        selectedPetName: '',
        level: 1,
        stats: {
          hp: 0,
          str: 0,
          def: 0,
          agi: 0,
          mag: 0,
        },
        results: {
          baseStats: '',
          combinations: 0,
          totalDropRange: '',
          dropRanges: '',
        },
        showResults: false,
        error: null,
        petTypes: pets,
      };
    },
    computed: {
      isFormValid() {
        return (
          this.petType &&
          this.level > 0 &&
          Object.values(this.stats).every((val) => val >= 0)
        );
      },
    },
    methods: {
      updateSelectedPetName() {
        const pet = this.petTypes.find((p) => p.id === this.petType);
        this.selectedPetName = pet ? pet.name : '';
      },
      calculateBP() {
        try {
          const level = parseInt(this.level, 10);
          const stats = {
            hp: parseInt(this.stats.hp, 10),
            str: parseInt(this.stats.str, 10),
            def: parseInt(this.stats.def, 10),
            agi: parseInt(this.stats.agi, 10),
            mag: parseInt(this.stats.mag, 10),
          };

          // Only calculate if all values are valid numbers
          if (
            !isNaN(level) &&
            !Object.values(stats).some((val) => isNaN(val))
          ) {
            const currentStat = new Stat(
              level,
              stats.hp,
              stats.mag,
              stats.str,
              stats.def,
              stats.agi
            );

            const bp = currentStat.toBP();

            if (bp && !Object.values(bp).some((val) => isNaN(val))) {
              // Format the results
              const baseStats = [
                Math.round(bp.hpp),
                Math.round(bp.attackp),
                Math.round(bp.defendp),
                Math.round(bp.agip),
                Math.round(bp.mpp),
              ].join(',');

              const selectedPet = this.petTypes.find(
                (p) => p.id === this.petType
              );
              const growthType = selectedPet?.growthType || 'normal';

              const growRange = new GrowRange(
                bp.hpp,
                bp.attackp,
                bp.defendp,
                bp.agip,
                bp.mpp,
                1,
                growthType
              );

              const currentLevelStats = growRange.calcBPAtLevel(level, 0);
              const prevLevelStats =
                level > 1 ? growRange.calcBPAtLevel(level - 1, 0) : null;

              const drops = this.calculateDrops(
                currentLevelStats,
                prevLevelStats
              );
              const combinations =
                this.calculateCombinations(currentLevelStats);

              this.results = {
                baseStats: baseStats,
                combinations: combinations,
                totalDropRange: drops.totalDropRange,
                dropRanges: drops.dropRanges,
              };

              this.error = null;
              this.showResults = true;
            }
          }
        } catch (error) {
          this.error = error.message || '计算过程中发生错误';
          this.showResults = false;
        }
      },

      calculateDrops(currentLevelStats, prevLevelStats) {
        const drops = {
          total: { min: 0, max: 0 },
          individual: [],
        };

        if (prevLevelStats) {
          const currentTotal =
            Math.round(currentLevelStats.sumFullBP * 10) / 10;
          const prevTotal =
            Math.round(prevLevelStats.sumFullBP * 1.1 * 10) / 10;
          drops.total.min = Math.floor(currentTotal - prevTotal);
          drops.total.max = Math.ceil(currentTotal - prevTotal);

          const statNames = ['体力', '魔法', '攻击', '防御', '敏捷'];
          drops.individual = currentLevelStats.baseBP.map((stat, index) => {
            const prevStat = prevLevelStats.baseBP[index];
            const dropMin = Math.floor((stat - prevStat * 1.1) * 10) / 10;
            const dropMax = Math.ceil((stat - prevStat * 1.1) * 10) / 10;
            return {
              name: statNames[index],
              range: `${dropMin.toFixed(1)} ~ ${dropMax.toFixed(1)}`,
            };
          });
        }

        return {
          totalDropRange:
            drops.total.min === drops.total.max
              ? `${drops.total.min}`
              : `${drops.total.min} ~ ${drops.total.max}`,
          dropRanges: drops.individual.length
            ? drops.individual.map((d) => d.range).join(' , ')
            : '0 , 0 , 0 , 0 , 0',
        };
      },

      calculateCombinations(currentLevelStats) {
        const baseBPs = currentLevelStats.baseBP.map((bp) => Math.floor(bp));
        return baseBPs.reduce((acc, bp) => {
          return acc * (bp > 0 ? Math.floor(bp / 4) + 1 : 1);
        }, 1);
      },
      getGrowthTypeDisplay(type) {
        switch (type) {
          case 'normal':
            return '普通成长';
          case 'high':
            return '高速成长';
          case 'special':
            return '特殊成长';
          default:
            return '未知';
        }
      },
      getGrowthBonus(type) {
        switch (type) {
          case 'high':
            return '基础×1.1，成长×1.2';
          case 'special':
            return '基础×1.2，成长×1.5';
          default:
            return '';
        }
      },
      reset() {
        this.petType = '';
        this.selectedPetName = '';
        this.level = 1;
        this.stats = {
          hp: 0,
          str: 0,
          def: 0,
          agi: 0,
          mag: 0,
        };
        this.showResults = false;
      },
    },
    computed: {
      selectedPet() {
        return this.petTypes.find((p) => p.id === this.petType) || null;
      },
    },
  };
</script>

<style scoped>
  .pet-calculator {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: var(--c-bg);
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--c-shadow);
  }

  .calculator-form {
    margin-bottom: 20px;
    padding: 16px;
    border: 1px solid #333;
    border-radius: 4px;
    background: #1a1a1a;
    position: relative;
  }

  .calculator-form h3 {
    margin: 0 0 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid #333;
    color: #42b983;
    font-size: 16px;
  }

  .calculator-results {
    padding: 16px;
    border: 1px solid #333;
    border-radius: 4px;
    background: #1a1a1a;
    position: relative;
  }

  /* Container gradients for depth */
  .calculator-form,
  .calculator-results {
    background: linear-gradient(180deg, #1a1a1a 0%, #161616 100%);
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05),
      0 1px 3px 0 rgba(0, 0, 0, 0.2);
  }

  /* Section headers */
  .calculator-results h4 {
    margin: 0 0 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #333;
    color: #e0e0e0;
    font-size: 14px;
    font-weight: 500;
  }

  /* Dark mode specific container styles */
  .theme-dark .calculator-form,
  .theme-dark .calculator-results {
    background: var(--c-bg-dark);
    border-color: var(--c-border-dark);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .theme-dark .calculator-form::before,
  .theme-dark .calculator-results::before {
    background: var(--c-text);
    opacity: 0.03;
  }

  .form-group {
    margin-bottom: 20px;
    position: relative;
  }

  .form-group label {
    display: inline-block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--c-text);
    font-size: 0.95rem;
    position: relative;
    padding-left: 8px;
  }

  .form-group label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 14px;
    background: var(--c-brand);
    border-radius: 2px;
  }

  .stats-row {
    display: flex;
    gap: 12px;
    margin: 25px 0;
    padding: 16px;
    background: #1a1a1a;
    border-radius: 4px;
    border: 1px solid #333;
    align-items: center;
    flex-wrap: nowrap;
  }

  .stats-row .form-group {
    margin-bottom: 0;
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .stats-row input[type='number'] {
    width: 60px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 6px 8px;
  }

  .stats-row label {
    margin-bottom: 0;
    white-space: nowrap;
    font-size: 14px;
  }

  /* Add visual feedback on valid input */
  .stats-grid input[type='number']:valid:not(:placeholder-shown) {
    border-color: var(--c-tip);
    background: linear-gradient(to right, var(--c-bg) 0%, var(--c-tip-bg) 100%);
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: background-position 0.5s ease-out;
  }

  input[type='number'],
  select {
    padding: 6px 10px;
    border: 1px solid #333;
    border-radius: 4px;
    background: #1a1a1a;
    color: #e0e0e0;
    font-size: 14px;
    text-align: center;
    transition: all 0.2s ease;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', monospace;
  }

  /* Specific width for level input */
  .form-group input[type='number'] {
    width: 80px;
  }

  /* Hide number input arrows */
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  input[type='number']:focus,
  select:focus {
    border-color: #42b983;
    outline: none;
    box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
    background: #242424;
  }

  input[type='number']:hover,
  select:hover {
    border-color: #404040;
    background: #242424;
  }

  select {
    width: 100%;
    height: 40px;
    cursor: pointer;
    text-align: left;
    padding-right: 32px;
    background-color: #1a1a1a;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23808080' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-position: right 8px center;
    background-repeat: no-repeat;
    background-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  select:hover,
  select:focus {
    background-color: #242424;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2342b983' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-position: right 8px center;
    background-repeat: no-repeat;
  }

  select option {
    background-color: #1a1a1a;
    color: #e0e0e0;
    padding: 8px;
  }

  select:focus option:hover,
  select:focus option:checked {
    background: #42b983;
    color: #fff;
  }

  .form-actions {
    display: flex;
    gap: 12px;
    margin-top: 25px;
    justify-content: flex-end;
  }

  button {
    min-width: 100px;
    height: 32px;
    padding: 0 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    outline: none;
  }

  button::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 1px solid transparent;
    border-radius: inherit;
    pointer-events: none;
  }

  button:hover::after {
    border-color: rgba(255, 255, 255, 0.1);
  }

  button:active {
    transform: translateY(1px);
  }

  .primary-button {
    background: #2c3e50;
    color: #ffffff;
    border: 1px solid #34495e;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }

  .primary-button:hover {
    background: #34495e;
    border-color: #42b983;
  }

  .primary-button:disabled {
    background: #3f3f3f;
    border-color: #4a4a4a;
    color: #666;
    cursor: not-allowed;
    box-shadow: none;
  }

  .secondary-button {
    background: #1a1a1a;
    color: #e0e0e0;
    border: 1px solid #333;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05),
      0 1px 2px 0 rgba(0, 0, 0, 0.15);
  }

  .secondary-button:hover {
    background: #242424;
    border-color: #42b983;
    color: #42b983;
  }

  /* Dark mode specific button styles */
  .theme-dark .primary-button {
    background: linear-gradient(180deg, #2c3e50 0%, #243342 100%);
  }

  .theme-dark .secondary-button {
    background: linear-gradient(180deg, #1a1a1a 0%, #121212 100%);
  }

  /* Button focus states */
  button:focus::after {
    border-color: #42b983;
    box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.1);
  }

  /* Dark mode specific styles */
  .theme-dark .primary-button {
    color: var(--c-bg-dark);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .theme-dark .primary-button:disabled {
    color: var(--c-text-dark);
    background: var(--c-border-dark);
  }

  .theme-dark .secondary-button {
    background: var(--c-bg-darker);
    border-color: var(--c-border-dark);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .theme-dark .secondary-button::before {
    background: var(--c-text);
    opacity: 0.05;
  }

  .theme-dark .secondary-button:hover {
    background: var(--c-bg-dark);
    color: var(--c-brand-light);
    border-color: var(--c-brand-light);
  }

  .error-message {
    margin-top: 15px;
    padding: 10px;
    background-color: var(--c-danger-bg);
    border: 1px solid var(--c-danger);
    border-radius: 4px;
    color: var(--c-danger-text);
  }

  .input-summary {
    margin-bottom: 20px;
    padding: 15px;
    background: var(--c-bg);
    border-radius: 8px;
    border: 1px solid var(--c-border);
  }

  .command-text {
    font-family: monospace;
    font-size: 16px;
    padding: 8px;
    background: var(--c-bg-lighter);
    border-radius: 4px;
    color: var(--c-text);
  }

  .pet-info {
    margin-bottom: 20px;
  }

  .info-row {
    display: flex;
    margin-bottom: 10px;
  }

  .info-row .label {
    min-width: 100px;
    font-weight: bold;
    color: var(--c-text-light);
  }

  .info-row .value {
    font-family: monospace;
    color: var(--c-text);
  }

  .calculation-results {
    padding: 15px;
    background: var(--c-bg);
    border-radius: 8px;
    border: 1px solid var(--c-border);
    margin-bottom: 20px;
  }

  .results-text {
    color: var(--c-text-lighter);
    font-size: 14px;
    margin: 10px 0;
  }

  .stat-order {
    font-family: monospace;
    margin: 10px 0;
    color: var(--c-text-light);
  }

  .drop-range {
    margin: 15px 0;
    font-family: monospace;
  }

  .total-drop {
    margin-bottom: 8px;
    color: var(--c-warning);
  }

  .drop-possibilities {
    color: var(--c-text);
  }

  .command-help {
    margin-top: 20px;
    padding: 15px;
    background: var(--c-bg-lighter);
    border-radius: 8px;
  }

  .help-text {
    font-family: monospace;
    color: var(--c-text-light);
  }

  .theme-dark .pet-calculator {
    --c-shadow: rgba(0, 0, 0, 0.2);
  }

  .growth-type {
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
  }

  .growth-type.normal {
    background: var(--c-bg-lighter);
    color: var(--c-text);
  }

  .growth-type.high {
    background: var(--c-warning-bg);
    color: var(--c-warning-text);
  }

  .growth-type.special {
    background: var(--c-tip-bg);
    color: var(--c-tip-text);
  }

  .growth-bonus {
    margin-left: 8px;
    font-size: 0.9em;
    color: var(--c-text-light);
    font-style: italic;
  }
</style>
