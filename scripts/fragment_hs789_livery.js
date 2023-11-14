const fragmenter = require('@flybywiresim/fragmenter');
const fs = require('fs');

const execute = async () => {
    try {
        const result = await fragmenter.pack({
            packOptions: { splitFileSize: 102_760_448, keepCompleteModulesAfterSplit: false },
            baseDir: './horizonsim-aircraft-789-9-Livery-Package/build/horizonsim-aircraft-787-9',
            outDir: './horizonsim-aircraft-789-9-Livery-Package/build/build-modules',
            modules: [{
                name: 'American Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_AAL'
            }, {
                name: 'Air Canada',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ACA'
            }, {
                name: 'Air Canada 2',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ACA2'
            }, {
                name: 'Air Canada 3',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ACA3'
            }, {
                name: 'Air Europa',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_AEA'
            }, {
                name: 'Air France',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_AFR'
            }, {
                name: 'All Nippon Airways',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ANA'
            }, {
                name: 'All Nippon Airways Star Wars',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ANA2'
            }, {
                name: 'Air New Zealand',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ANZ'
            }, {
                name: 'Air New Zealand 2',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ANZ2'
            }, {
                name: 'British Airways',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_BAW'
            }, {
                name: 'TUI fly Nordic',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_BLX'
            }, {
                name: 'Air China',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_CCA'
            }, {
                name: 'China Eastern Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_CES'
            }, {
                name: 'Hainan Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_CHH'
            }, {
                name: 'Shanghai Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_CSH'
            }, {
                name: 'China Southern Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_CSN'
            }, {
                name: 'Xiamen Air',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_CXA'
            }, {
                name: 'Xiamen Air 2',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_CXA2'
            }, {
                name: 'Juneyao Air',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_DKH'
            }, {
                name: 'Lufthansa',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_DLH'
            }, {
                name: 'El Al',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ELY'
            }, {
                name: 'El Al 2',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ELY2'
            }, {
                name: 'Etihad',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_ETD'
            }, {
                name: 'Japan Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_JAL'
            }, {
                name: 'Korean Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_KAL'
            }, {
                name: 'KLM Royal Dutch Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_KLM'
            }, {
                name: 'LOT Polish Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_LOT'
            }, {
                name: 'Egyptair',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_MSR'
            }, {
                name: 'Norse Atlantic Airways',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_NBT'
            }, {
                name: 'Qantas',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_QFA'
            }, {
                name: 'Saudia',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_SVA'
            }, {
                name: 'Scoot',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_TGW'
            }, {
                name: 'Thai Airways International',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_THA'
            }, {
                name: 'TUI Airways',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_TOM'
            }, {
                name: 'United Airlines',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_UAL'
            }, {
                name: 'Norse Atlantic UK',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_UBT'
            }, {
                name: 'Virgin Atlantic',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_VIR'
            }, {
                name: 'Vistara',
                sourceDir: './SimObjects/Airplanes/_HorizonSim_B787_9_VTI'
            }, {
                name: 'Westjet',
                sourceDir: './SimObjects/Airplanes/HorizonSim_B787_9_TRENT/WJA'
            }]
        });
        console.log(result);
        console.log(fs.readFileSync('./horizonsim-aircraft-789-9-Livery-Package/build/build-modules/modules.json').toString());
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

execute();