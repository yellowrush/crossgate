<!-- Pet Calculator Component -->
<template>
  <div class="pet-calculator">
    <div class="calculator-form">
      <h3>🔰 宠物掉档计算</h3>

      <!-- 一行指令式输入 -->
      <div class="form-group">
        <label>输入：</label>
        <input
          v-model="command"
          type="text"
          class="command-input"
          placeholder="宠物名称 等级（1级可以省略） HP MP 攻击力 防御力 敏捷"
          @keyup.enter="calculateBP"
        />
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
        <h4>输入指令:</h4>
        <div class="command-text">
          {{ command }}
        </div>
      </div>

      <div class="calculation-results">
        <h4>计算结果</h4>
        <div class="command-text">
          {{ resultText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    petsData,
    RealGuessRaw,
    GuessResultToString,
  } from 'crossgate-pet-calc';

  export default {
    name: 'PetCalculator',
    data() {
      return {
        // 一行指令输入，如：淺域龍神 128 63 46 26 33
        command: '',
        // RealGuess + GuessResultToString 的最终字符串结果
        resultText: '',
        showResults: false,
        error: null,
      };
    },
    computed: {
      isFormValid() {
        return this.command.trim().split(/\s+/).length >= 6;
      },
    },
    methods: {
      calculateBP() {
        try {
          const input = this.command.trim();
          if (!input) {
            this.error = '请输入宠物名称和属性';
            this.showResults = false;
            return;
          }

          const guessResult = RealGuessRaw(petsData, input);
          this.resultText = GuessResultToString(guessResult);
          this.error = null;
          this.showResults = true;
        } catch (error) {
          this.error = error.message || '计算过程中发生错误';
          this.showResults = false;
        }
      },
      reset() {
        this.command = '';
        this.resultText = '';
        this.showResults = false;
        this.error = null;
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

  .command-input {
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    padding: 0 14px;
    border-radius: 999px;
    border: 1px solid var(--c-border);
    background: var(--c-bg);
    color: var(--c-text);
    font-size: 14px;
    text-align: left;
    outline: none;
    transition: all 0.2s ease;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui,
      sans-serif;
  }

  .command-input::placeholder {
    color: var(--c-text-light);
  }

  .command-input:hover {
    border-color: var(--c-brand);
    background: var(--c-bg-lighter);
  }

  .command-input:focus {
    border-color: var(--c-brand);
    box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
    background: var(--c-bg);
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

  .theme-dark .command-input {
    background: var(--c-bg-dark);
    border-color: var(--c-border-dark);
    color: var(--c-text);
  }

  .theme-dark .command-input:hover,
  .theme-dark .command-input:focus {
    background: var(--c-bg-darker);
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
