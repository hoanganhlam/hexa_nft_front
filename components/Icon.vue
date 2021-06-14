<template>
    <span v-if="element" class="icon ">
        <svg :viewBox="`0 0 ${vb} ${vb}`" :fill="fill">
            <path v-for="(val, i) in element.paths" :key="`path-${i}`" :d="getField(val, 'path')"
                  :transform="getField(val, 'transform')" :style="getField(val, 'style')"/>
            <polygon
               v-for="(val, i) in element.polygons" :key="`polygon-${i}`"
               :points="getField(val, 'points')" :style="getField(val, 'style')"
            />
            <circle
               v-for="(val, i) in element.circles" :key="`circle-${i}`" :style="getField(val, 'style')"
               :cx="val.cx" :cy="val.cy" :r="val.r"
            />
            <ellipse
               v-for="(val, i) in element.ellipses" :key="`ellipse-${i}`" :style="getField(val, 'style')"
               :cx="val.cx" :cy="val.cy" :rx="val.rx" :ry="val.ry"
            />
        </svg>
    </span>
</template>

<script>
import icons from './Icon.json';

export default {
   name: 'SVGIcon',
   props: {
      name: String,
      outline: {
         default: false,
         type: Boolean
      },
      fill: {
         default: 'true'
      },
      vb: {
         default: 24
      }
   },
   methods: {
      getField(val, field) {
         return val && typeof val === "object" ? val[field] : typeof val === "string" && ["polygon", "path"].includes(field) ? val : undefined;
      }
   },
   computed: {
      element() {
         if (!this.name) return null;
         let instance = this.icons[this.name];
         let paths = [], circles = [], polygons = [], ellipses = [];
         if (typeof instance === "object") {
            if (Array.isArray(instance)) {
               paths = instance;
            }
            if (instance["paths"]) {
               paths = Array.isArray(instance["paths"]) ? instance["paths"] : [instance["paths"]]
            }
            if (instance["circles"]) {
               circles = Array.isArray(instance["circles"]) ? instance["circles"] : [instance["circles"]]
            }
            if (instance["ellipses"]) {
               ellipses = Array.isArray(instance["ellipses"]) ? instance["ellipses"] : [instance["ellipses"]]
            }
            if (instance["polygons"]) {
               polygons = Array.isArray(instance["polygons"]) ? instance["polygons"] : [instance["polygons"]]
            }
         } else if (typeof instance === "string") {
            paths = [instance]
         }
         return {
            paths,
            circles,
            polygons,
            ellipses
         }
      },
      icons() {
         return icons
      }
   },
};
</script>

<style>
.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon.size-auto svg {
  width: 100%;
  height: 100%;
}


.icon svg {
  width: 1rem;
  height: 1rem;
}

.icon.lg svg {
  width: 6rem;
  height: 6rem;
}

.icon.md svg {
  width: 2rem;
  height: 2rem;
}

.icon.sm svg {
  width: .75rem;
  height: .75rem;
}
</style>
