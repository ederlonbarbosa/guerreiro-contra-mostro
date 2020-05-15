new Vue({
    el: "#app",
    data: {
        warriorLife: 100,
        monsterLife: 100,
        numberSpecial: 1,
        numberHeal: 3,
        showActions: false,
        attackLog: []
    },
    methods: {
        normalAttack() {
            this.attack(0);
        },
        specialAttack() {
            this.attack(Math.round(Math.random() * 15));
            this.numberSpecial--;
        },
        attack(valueAtack) {
            let warriorAttack = (Math.round(Math.random() * 10) + valueAtack);
            this.monsterLife = Math.max(this.monsterLife - warriorAttack, 0);

            let color = "red";

            if (valueAtack > 0) {
                color = "yellow";
            }

            this.addLog("Você atacou o monstro com " + warriorAttack, color);

            if (this.monsterLife > 0) {
                let monsterAttack = (Math.round(Math.random() * 10) + Math.round(Math.random() * 3));
                this.warriorLife = Math.max(this.warriorLife - monsterAttack, 0);
                this.addLog("Monstro atacou você com " + monsterAttack, "grey right-align");
            }
        },
        heal() {
            this.warriorLife = Math.max(this.warriorLife + (Math.round(Math.random() * 10)), 0);
            this.numberHeal--;
        },
        start() {
            this.warriorLife = 100;
            this.monsterLife = 100;
            this.numberHeal = 3;
            this.numberSpecial = 1;
            this.showActions = true;
            this.attackLog = [];
        },
        addLog(text, cls) {
            this.attackLog.unshift({ text, cls });
        }
    },
    computed: {
        hasResult: function () {
            return this.monsterLife < 1 || this.warriorLife < 1;
        }
    },
    watch: {
        hasResult: function () {
            this.showActions = false
        }
    },
});