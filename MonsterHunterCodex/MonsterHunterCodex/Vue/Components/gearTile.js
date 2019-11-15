var template = `
<div class="gear-tile" v-bind:class="activeSearch ? 'active' : ''">
    <div class="col-sm">
        <div v-bind:id="ids.infoContainer" class="info-container">
            <button class="btn" v-bind:class="activeSearch ? 'btn-red' : 'btn-blu'" v-on:click="openGearSearch($event)" style="float:right">
                <i v-bind:class="activeSearch ? 'fa fa-times' : 'fas fa-chevron-down'"></i>
            </button>
            <img class="gear-icon" v-bind:src="stockImgUrl" height="40" width="40" />
            <h3 class="gear-title">{{ toTitleCase(geartype) }} Armor</h3>
            <h4 class="gear-name">Armor Name Here</h4>
        </div>
    </div>
    <transition name="slide">
        <div class="gear-search" v-if="activeSearch">
            <div class="input-group" v-bind:id="ids.inputGroup">
                <input 
                    class="form-control form-control-sm ml-3 w-75 gear-search-box search-box" 
                    type="text" 
                    placeholder="Search Name" 
                    aria-label="Search" 
                    v-on:click.prevent 
                    v-model="search.query">
                <span class="input-group-btn" v-on:click.prevent>
                    <button class="btn btn-blu" v-on:click.prevent="doGearSearch()"><i class="fas fa-search"></i></button>
                </span>
            </div>
            <div style="width: 100%; text-align: center;" class="spinner-div" v-bind:class="showSpinner ? 'active' : ''">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
            <transition name="slide">
                <div v-if="!showSpinner" class="results-list">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="result in search.results">
                            <div class="row">
                                <div class="col-sm-5">
                                    <img v-bind:src="result.assets !== null ? result.assets.imageMale : stockImgUrl" height="80" width="80" />
                                </div>
                                <div class="col-sm-7">
                                    {{ result.name }}
                                </div>
                            </div>


                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </transition>
{{$attrs.geartype}}
</div>

`;

Vue.component('gear-tile', {
    template: template,
    props: ['geartype'],
    data: function () {
        return {
            activeSearch : false,
            showSpinner: false,
            stockImgUrl: '/Assets/Images/Armor/Stock/' + this.geartype + '-icon.png',
            ids: {
                inputGroup: this.geartype + '-input-group',
            },
            search: {
                query: "",
                results:[],
            }
        }
    },
    methods:{
        openGearSearch: function () {
            this.activeSearch = this.activeSearch ? false : true;
        },
        toTitleCase(str) {
            return typeof str == 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : 'ERROR';
             
        },
        doGearSearch: function () {
            var vm = this;
            var armorType = vm.$props.geartype;
            var isValid = vm.validateSearch();
            if (isValid) {
                vm.showSpinner = true;
                $.ajax(
                {
                    type: 'GET',
                    url: 'https://mhw-db.com/armor?q={"type":"' + armorType + '","name":{"$like":"%' + vm.search.query + '%"}}',
                    data: '',
                    type: 'GET',
                    success: function (data) {
                        vm.showSpinner = false;
                        console.log(data)
                        vm.search.results = data;
                    }//end success
                })//end ajax
            }
        },
        validateSearch: function () {
            var vm = this;
            if (vm.search.query == '') {
                $('#' + vm.geartype + '-input-group').effect("shake", { direction: 'up', distance: 5, times: 2 });
                return false;
            } else {
                return true;
            }
        },
    },
    computed: {

    }
    

});