/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.system = {
    big: {
      used: 0,
      max: big,
    },
    medium: {
      used: 0,
      max: medium,
    },
    small: {
      used: 0,
      max: small,
    },
  };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  const { big, medium, small } = this.system;
  switch (carType) {
    case 1: {
      if (big.used < big.max) {
        big.used++;
        return true;
      }
      break;
    }
    case 2: {
      if (medium.used < medium.max) {
        medium.used++;
        return true;
      }
      break;
    }
    case 3: {
      if (small.used < small.max) {
        small.used++;
        return true;
      }
      break;
    }
    default: {
      break;
    }
  }
  return false;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
