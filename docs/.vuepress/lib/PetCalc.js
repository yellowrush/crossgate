'use strict';

// Pet calculator core functionality
class Stat {
  constructor(lvl, hp, mp, attack, defend, agi) {
    this.lvl = lvl;
    this.hp = hp;
    this.mp = mp;
    this.attack = attack;
    this.defend = defend;
    this.agi = agi;
  }

  toBP() {
    try {
      const matrix = [
        [8, 2, 3, 3, 1],
        [1, 2, 2, 2, 10],
        [0.2, 2.7, 0.3, 0.3, 0.2],
        [0.2, 0.3, 3, 0.3, 0.2],
        [0.1, 0.2, 0.2, 2, 0.1],
      ];

      const base = 20;
      const b = [
        this.hp - base,
        this.mp - base,
        this.attack - base,
        this.defend - base,
        this.agi - base,
      ];

      return this.solve(matrix, b);
    } catch (error) {
      throw new Error('计算BP时出错: ' + error.message);
    }
  }

  solve(A, b) {
    try {
      // Deep clone the arrays
      A = A.map((row) => [...row]);
      b = [...b];

      const n = 5;
      const x = new Array(n).fill(0);
      const eps = 1e-10;

      // Forward elimination with pivoting
      for (let i = 0; i < n; i++) {
        let maxEl = Math.abs(A[i][i]);
        let maxRow = i;

        for (let k = i + 1; k < n; k++) {
          if (Math.abs(A[k][i]) > maxEl) {
            maxEl = Math.abs(A[k][i]);
            maxRow = k;
          }
        }

        if (maxEl < eps) {
          throw new Error('矩阵计算错误: 无法求解');
        }

        if (maxRow !== i) {
          [A[i], A[maxRow]] = [A[maxRow], A[i]];
          [b[i], b[maxRow]] = [b[maxRow], b[i]];
        }

        for (let k = i + 1; k < n; k++) {
          const c = -A[k][i] / A[i][i];
          for (let j = i; j < n; j++) {
            if (i === j) {
              A[k][j] = 0;
            } else {
              A[k][j] += c * A[i][j];
            }
          }
          b[k] += c * b[i];
        }
      }

      // Back substitution
      for (let i = n - 1; i >= 0; i--) {
        let sum = 0;
        for (let j = i + 1; j < n; j++) {
          sum += A[i][j] * x[j];
        }
        if (Math.abs(A[i][i]) < eps) {
          throw new Error('计算错误: 除数为零');
        }
        x[i] = (b[i] - sum) / A[i][i];
      }

      return {
        hpp: Math.max(0, Math.round(x[0] * 100) / 100),
        mpp: Math.max(0, Math.round(x[1] * 100) / 100),
        attackp: Math.max(0, Math.round(x[2] * 100) / 100),
        defendp: Math.max(0, Math.round(x[3] * 100) / 100),
        agip: Math.max(0, Math.round(x[4] * 100) / 100),
      };
    } catch (error) {
      throw new Error('计算基础点数时出错: ' + error.message);
    }
  }
}

// Growth rates lookup table
const fullRates = {
  0: 0.0,
  1: 0.04,
  2: 0.08,
  3: 0.12,
  4: 0.16,
  5: 0.205,
  6: 0.25,
  7: 0.29,
  8: 0.33,
  9: 0.37,
  10: 0.415,
  11: 0.46,
  12: 0.5,
  13: 0.54,
  14: 0.58,
  15: 0.625,
  16: 0.67,
  17: 0.71,
  18: 0.75,
  19: 0.79,
  20: 0.835,
  21: 0.88,
  22: 0.92,
  23: 0.96,
  24: 1.0,
  25: 1.045,
  26: 1.09,
  27: 1.13,
  28: 1.17,
  29: 1.21,
  30: 1.255,
};

// Growth rate modifiers for different pet types
const GROWTH_MODIFIERS = {
  normal: { base: 1.0, growth: 1.0 },
  high: { base: 1.1, growth: 1.2 },
  special: { base: 1.2, growth: 1.5 },
};

class GrowRange {
  constructor(hp, attack, defend, agi, mp, bprate = 1, growthType = 'normal') {
    this.hpp = parseFloat(hp);
    this.mpp = parseFloat(mp);
    this.attackp = parseFloat(attack);
    this.defendp = parseFloat(defend);
    this.agip = parseFloat(agi);
    this.bprate = bprate;
    this.growthType = growthType;
    this.growthModifier =
      GROWTH_MODIFIERS[growthType] || GROWTH_MODIFIERS.normal;
  }

  calcBPAtLevel(lvl, lvlpoint) {
    try {
      const bps = [
        this.hpp * this.bprate,
        this.attackp * this.bprate,
        this.defendp * this.bprate,
        this.agip * this.bprate,
        this.mpp * this.bprate,
      ];

      const lvldiff = lvl - 1;

      // Apply growth rates with modifiers based on pet type
      for (let i = 0; i < bps.length; i++) {
        const baseVal = Math.max(0, bps[i] * this.growthModifier.base);
        const growthIndex = Math.min(30, Math.floor(Math.max(0, baseVal)));
        const baseGrowthRate = fullRates[growthIndex] || 0;
        const modifiedGrowthRate = baseGrowthRate * this.growthModifier.growth;
        bps[i] = Math.max(0, baseVal + modifiedGrowthRate * lvldiff);
      }

      // Round all values to one decimal place
      bps.forEach((val, i) => {
        bps[i] = Math.round(val * 10) / 10;
      });

      const sumBP = bps.reduce((a, b) => a + b, 0);

      return {
        baseBP: bps,
        sumBaseBP: sumBP + 10 * this.bprate,
        sumFullBP: sumBP + 10 * this.bprate + (lvlpoint || 0),
      };
    } catch (error) {
      throw new Error('计算成长时出错: ' + error.message);
    }
  }
}

export { Stat, GrowRange };
