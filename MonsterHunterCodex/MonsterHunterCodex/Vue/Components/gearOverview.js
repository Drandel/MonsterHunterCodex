var template = `
<div class="gear-overview">
    <div class="col-sm-12 col-md-8 col-lg-8" id="gear-overview">
        <h3>Gear Overview</h3>
        <div class="data-container-flex">
            <div class="col">
                
            </div>
            <div class="col">

            </div>
        </div>
    </div>
</div>
`;

Vue.component('gear-overview', {
    template: template,
    props: {
        stats: {
            type: Object,
            default: () => ({}),
        },
    },
    data: function () {
        return {
        }
    },
    methods: {

    },
    computed: {
    },
    mounted() {
    },
});

`<ul class="list-group text-center">
                    <li class="list-group-item list-title">Defense</li>
                    <li class="list-group-item">Base: {{ stats.defense.base }}</li>
                    <li class="list-group-item">Max: {{ stats.defense.max }}</li>
                    <li class="list-group-item">Augmented: {{ stats.defense.augmented }}</li>
                </ul>
            </div>
            <div class="col">
                <ul class="list-group text-center">
                    <li class="list-group-item list-title">Resistances</li>
                    <li class="list-group-item"><img class="table-icon" src="~/Assets/Images/Elements/dragon-icon.png" /> Dragon: {{ stats.resistances.dragon }}</li>
                    <li class="list-group-item"><img class="table-icon" src="~/Assets/Images/Elements/fire-icon.png" /> Fire: {{ stats.resistances.fire }}</li>
                    <li class="list-group-item"><img class="table-icon" src="~/Assets/Images/Elements/ice-icon.png" /> Ice: {{ stats.resistances.ice }}</li>
                    <li class="list-group-item"><img class="table-icon" src="~/Assets/Images/Elements/thunder-icon.png" /> Thunder: {{ stats.resistances.thunder }}</li>
                    <li class="list-group-item"><img class="table-icon" src="~/Assets/Images/Elements/water-icon.png" /> Water: {{ stats.resistances.water }}</li>
                </ul>`