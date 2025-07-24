import { persons } from "../../data/persons.js";

export function sortbal(a, b) {
    let duplicate = [...persons]
    let weights = []
    duplicate.sort((a, b) => a.weight - b.weight)
    duplicate.forEach(element => {
        weights.push(element.weight);
    });
    let result = closestsub(weights, a, b);
    console.log(result)
    return result


}

function closestsub(weights, a, b) {
    let lengthofw = weights.length
    let result = []
    let last = Math.floor(lengthofw / 2)
    result[last] = Infinity
    let exclude = null
    if (lengthofw % 2) {
        weights.forEach((weight, index) => {
            let duplicateweight = [...weights]
            duplicateweight.splice(index, 1)
            let temp = twosumeven(duplicateweight, a, b)
            if (result[last] > temp[last]) {
                exclude = weight
                result = temp
            }
        })
    }
    else {
        result = twosumeven(weights, a, b)
    }
    return [result, exclude]

}
function twosumeven(weights, a, b) {
    let length = weights.length
    length /= 2
    if (length > 7) {
        length = 7
    }
    let totalweight = 0
    weights.forEach(element => {
        totalweight += Number(element)
    })
    totalweight = totalweight + a + b
    console.log(totalweight)
    totalweight /= 2
    return kclose(length, weights, totalweight - a)
}
function twopointer(weights, target) {
    let result = [];
    let i = 0;
    let j = weights.length - 1;
    let mindiff = Infinity
    while (i < j) {
        let sum = Number(weights[i]) + Number(weights[j]);
        let diff = Math.abs(sum - target)
        if (diff < mindiff) {
            mindiff = diff;
            result = [weights[i], weights[j], diff]
        }
        if (sum > target) {
            j--;
        }
        else {
            i++;
        }
    }
    return result
}
function kclose(k, weights, target) {
    let lengthofw = weights.length
    let last = Math.floor(lengthofw / 2)
    let result = [];
    let temp = []
    result[last] = Infinity
    if (k == 2) {
        return twopointer(weights, target);
    }
    else {
        for (let i = 0; i < weights.length; i++) {
            if (i == 0 || weights[i] !== weights[i - 1]) {
                let subsets = null
                subsets = kclose(k - 1, weights.slice(i + 1), target - weights[i]);
                let temp = [weights[i], ...subsets]
                if (result[last] > temp[last]) {
                    result = temp
                }

            }
        }

        return result
    }

}