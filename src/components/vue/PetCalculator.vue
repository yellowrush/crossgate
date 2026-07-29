<template>
  <div class="pet-calculator">
    <div class="calculator-form">
      <h3>🔰 宠物掉档计算</h3>
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
      <div class="form-actions">
        <button class="primary-button" @click="calculateBP" :disabled="!isFormValid">
          计算掉档
        </button>
        <button class="secondary-button" @click="reset">重置</button>
      </div>
      <div v-if="error" class="error-message">{{ error }}</div>
    </div>
    <div v-if="showResults && !error" class="calculator-results">
      <div class="input-summary">
        <h4>输入指令:</h4>
        <div class="command-text">{{ command }}</div>
      </div>
      <div class="calculation-results">
        <h4>计算结果</h4>
        <div class="command-text">{{ resultText }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { petsData, RealGuessRaw, GuessResultToString } from 'crossgate-pet-calc';

const command = ref('');
const resultText = ref('');
const showResults = ref(false);
const error = ref(null);

const isFormValid = computed(() => command.value.trim().split(/\s+/).length >= 6);

function calculateBP() {
  try {
    const input = command.value.trim();
    if (!input) {
      error.value = '请输入宠物名称和属性';
      showResults.value = false;
      return;
    }
    const guessResult = RealGuessRaw(petsData, input);
    resultText.value = GuessResultToString(guessResult);
    error.value = null;
    showResults.value = true;
  } catch (err) {
    error.value = err.message || '计算过程中发生错误';
    showResults.value = false;
  }
}

function reset() {
  command.value = '';
  resultText.value = '';
  showResults.value = false;
  error.value = null;
}
</script>

<style scoped>
.pet-calculator {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: var(--body-bg);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.calculator-form {
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
}
.calculator-form h3 {
  margin: 0 0 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
  color: var(--accent);
  font-size: 16px;
}
.calculator-results {
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
}
.calculator-results h4 {
  margin: 0 0 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
  color: var(--text);
  font-size: 14px;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: inline-block;
  margin-bottom: 8px;
  font-weight: 600;
  color: var(--text);
  font-size: 0.95rem;
}
.command-input {
  width: 100%;
  box-sizing: border-box;
  height: 40px;
  padding: 0 14px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--body-bg);
  color: var(--text);
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
}
.command-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px rgba(62, 175, 124, 0.2);
}
.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}
.primary-button {
  padding: 8px 20px;
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s;
}
.primary-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.secondary-button {
  padding: 8px 20px;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}
.error-message {
  margin-top: 12px;
  padding: 8px 12px;
  background: var(--badge-error);
  border-radius: 4px;
  color: #cc0000;
  font-size: 13px;
}
.command-text {
  font-family: var(--mono-font);
  background: var(--code-bg);
  color: var(--code-color);
  padding: 12px;
  border-radius: 4px;
  font-size: 13px;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
