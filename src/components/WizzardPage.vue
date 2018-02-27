<template>
  
    <div class="row">
        <div class="col">
            <div class="wizzard-navigation">
                <div class="progress">
                  <div class="progress-bar" role="progressbar" :style="{width: progress + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    {{steps[currentPage]}}
                  </div>
                </div>
                <div class="next-buttons">
                  <div class="row text-center">
                    <div v-for="(label, idx) in steps" class="col" :key="'page-icon'+idx">
                      <button 
                        :class="'btn btn-sm btn-' + (idx === currentPage ? 'success' : (isFilled(idx) ? 'primary':'info'))" 
                        @click.prevent="isFilled(idx)?setPage(idx):null"
                        :disabled='!isFilled(idx)'
                        >
                          Langkah {{idx + 1}}. <i :class="'fa fa-' + icons[idx]"></i> {{steps[idx]}}
                      </button>
                    </div>
                  </div>
                </div>
            </div>
            <div class="wizzard-container" :style="containerStyle" ref="container">
              <!-- the main content here! -->
              <slot>
                <div 
                  v-for="(label, idx) in steps" 
                  :id="'sample-wizz-page'+idx" 
                  :key="'page' + idx"
                  :style="{left: offsets[idx]}"
                  >
                    <h3>Page{{idx}}</h3>
                    {{offsets}}
                </div>
              </slot>
            </div>
            <div class="clearfix"></div>
            <div class="wizzard-footer">
                <button class="btn btn-primary float-left" v-if="currentPage > 0"
                  @click.prevent="prevPage"  
                  >
                    <i class="fa fa-angle-left"></i> Kembali
                </button>

                <button class="btn btn-primary float-right" v-if="currentPage < steps.length - 1"
                  @click.prevent="nextPage"
                  >
                    {{steps[currentPage+1]}} <i class="fa fa-angle-right"></i>
                </button>
            </div>
        </div>
    </div>
  
</template>

<script>
const jQuery = require("jquery");

export default {
  name: "WizzardPage",
  props: {
    setChildrenOffsets: {
      required: true,
      type: Function
    },
    icons: {
      required: false,
      type: Array,
      default: function() {
        return ["shopping-cart", "truck", "credit-card"];
      }
    },
    steps: {
      required: false,
      type: Array,
      default: function() {
        return [
          "Keranjang Belanja",
          "Alamat Pengiriman",
          "Pilih Metode Pembayaran"
        ];
      }
    }
  },
  data: function() {
    return {
      containerStyle: {
        width: "100%",
        overflowX: "hidden",
        height: "356px"
      },
      offsets: [],
      currentPage: 0,
      filledSteps: []
    };
  },
  methods: {
    // halaman selanjutnya
    prevPage: function() {
      this.setPage(this.currentPage - 1);
    },
    // halaman sebelumnya
    nextPage: function() {
      if (this.filledSteps.indexOf(this.currentPage) < 0)
        this.filledSteps.push(this.currentPage);

      this.setPage(this.currentPage + 1);
    },
    // langsung ke page
    setPage: function(page) {
      this.currentPage = page;
      this.calculateContainer();
    },
    // posisi..
    calculateContainer: function() {
      // recalculating height
      let height = 0;

      const containerWidth = jQuery(this.$refs.container).width();

      // jQuery("div", this.$refs.container)
      //   .children("div")
      //   .each(function() {
      //     console.log(this);
      //     const myHeight = jQuery(this).outerHeight();
      //     console.log(myHeight);
      //     if (height < myHeight) height = myHeight;
      //   });

      // this.containerStyle.height = height + "px";

      // positioning the page..
      const offsets = [];

      for (let i = 0; i < this.steps.length; ++i) {
        offsets[i] =
          i * containerWidth - this.currentPage * containerWidth + "px";
      }

      // console.log(containerWidth, offsets);

      this.offsets = offsets;
    },
    // apakah page sudah diisi?
    isFilled: function(idx) {
      return this.filledSteps.indexOf(idx) >= 0;
    }
  },
  mounted: function() {
    this.calculateContainer();
  },
  computed: {
    progress: function() {
      return (this.currentPage + 1) / this.steps.length * 100;
    }
  },
  watch: {
    offsets: function(oldOffsets, newOffsets) {
      // console.log(oldOffsets, newOffsets);
      this.setChildrenOffsets(this.offsets);
    }
  }
};
</script>

<style scoped>
.wizzard-container {
  position: relative;
  overflow-x: hidden;
}

.wizzard-container > div {
  height: 10em;
  width: 100%;
  position: absolute;
  top: 0;
}

.wizzard-footer {
  margin-top: 1em;
}

div.next-buttons {
  margin-top: 0.5em;
  margin-bottom: 1em;
}

#sample-wizz-page0 {
  height: 20em;
  background-color: red;
}

#sample-wizz-page1 {
  background-color: green;
}
#sample-wizz-page2 {
  background-color: blue;
}
</style>


