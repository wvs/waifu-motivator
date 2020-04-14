export let cheers = {

    badTime: [
        "Ganbatte onii-chan!",
        "Onii-chan no baka..",
        "Ganbaranakya!"
    ],

    goodWork: [
        "Dekita!",
        "Gokurou-sama",
        "SUGOI!"
    ],

    onReturn: [
        "Okaeri!",
        "Kyou mo ganbarou!"
    ],

    cheerForBadTime(){
        return this.badTime[
            Math.floor(
                Math.random() * this.badTime.length
        )];
    },

    cheerForGoodWork(){
        return this.goodWork[
            Math.floor(
                Math.random() * this.goodWork.length
        )];
    },

    cheerOnReturn(){
        return this.onReturn[
            Math.floor(
                Math.random() * this.onReturn.length
        )];
    }
};