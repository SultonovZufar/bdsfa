let n = 10000000;
let arr = new Array(n);

module.exports = [
    {
        name: "For",
        loop: () => {
            for (let i = 1; i <= arr.length; i++) {
                arr[i];
            }
        }
    },
    {
        name: "forEach",
        loop: () => {
            arr.forEach(item => item);
        }
    },
    {
        name: "forOf",
        loop: () => {
            for (let item of arr) {
                item;
            }
        }
    },
    {
        name: "forIn",
        loop: () => {
            for (let item in arr) {
                arr[item];
            }
        }
    },
    {
        name: "while",
        loop: () => {
            let i = 0;
            while(i < arr.length) {
                arr[i];
                i++;
            }
        }
    }
];