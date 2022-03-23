var template = `
<div class="gear-selector">
    <div class="data-container-tight" @mouseenter="flags.showEdit=true" @mouseleave="flags.showEdit=false">
        <div v-bind:class="showEdit" class="data-container-header text-center">
            <button class="btn-dark">Armor</button>
            <button class="btn-dark">Weapon</button>
        </div>
        <div>
            <gear-tile ref="headComponent" geartype="head" @gear-selected-event="gearSelected"></gear-tile>
            <gear-tile ref="chestComponent" geartype="chest" @gear-selected-event="gearSelected"></gear-tile>
            <gear-tile ref="glovesComponent" geartype="gloves" @gear-selected-event="gearSelected"></gear-tile>
            <gear-tile ref="waistComponent" geartype="waist" @gear-selected-event="gearSelected"></gear-tile>
            <gear-tile ref="legsComponent" geartype="legs" @gear-selected-event="gearSelected"></gear-tile>
            <div v-bind:class="showEdit" class="data-container-footer text-center">
                <button class="btn btn-dark">Clear</button>
            </div>
        </div>
    </div>
    </div>
</div>

`;



Vue.component('gear-selection', {
    template: template,
    props: [''],
    data: function () {
        return {
            flags: {
                showEdit: false,
            },
        }
    },
    methods: {
        gearSelected: function (event) {
            console.log("captured")
            console.log(event)
        }
    },
    computed: {
        showEdit: function () {
            return this.flags.showEdit == true ? "_show" : "_hide";
        },
        
    }


});