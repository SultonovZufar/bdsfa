const loops = require('./test/loops');
const print = require('./utils/print');
const zed = require('./utils/normalize');
const res  = require ('./utils/parse')

let results = [];
let preUsage;
let usage;

let n = parseInt(process.argv[2]);
let normalizePath = normalize(process.argv[3])

function sumCPU(usage, currentTime) {
    return 100 * (usage.user + usage.system) / (currentTime * 1000);
}

if (n) {
    function testLoops(n, loops, summaTime = 0, summaCPU = 0, summaRam = 0) {
        for (let j = 1; j <= n; j++) {
            let startTime = Date.now();
            preUsage = process.cpuUsage();

            loops.loop();
            
            summaTime += Date.now() - startTime;
            
            usage = process.cpuUsage(preUsage);



            summaCPU += sumCPU(usage, Date.now() - startTime)   // 100 * (usage.user + usage.system) / ((Date.now() - startTime) * 1000);
            summaRam += process.memoryUsage().heapUsed / (1024 ** 2);
        }

        // process.memoryUsage().heapUsed/(1024  2),

        summaTime /= n;
        summaCPU = +(summaCPU / n).toFixed(2);
        summaRam = +(summaRam / n).toFixed(2);

        return {summaTime, summaCPU, summaRam};
    }


    (function() {
        for (let i = 0; i < loops.length; i++) {

            // for (let j = 1; j <= n; j++) {
            //     let startTime = Date.now();
            //     preUsage = process.cpuUsage();

            //     loops[i].loop();
                
            //     summaTime += Date.now() - startTime;
                
            //     usage = process.cpuUsage(preUsage);
            //     summaCPU += 100 * (usage.user + usage.system) / ((Date.now() - startTime) * 1000);
            // }
            
            // results.push({
            //     name: loops[i].name, 
            //     time: summaTime / n,
            //     cpu: +(summaCPU / n).toFixed(2)
            // });

            results.push({
                name: loops[i].name, 
                time: testLoops(n, loops[i]).summaTime,
                cpu: testLoops(n, loops[i]).summaCPU,
                ram: testLoops(n, loops[i]).summaRam
            });
        }
    })()

    print(results);
} else {
    console.log("n is not included");
}