import { ref, onMounted, onUnmounted, computed } from "vue";
import type { Ref, ComputedRef } from "vue";

const MOBILE_BREAKPOINT = 768;

interface DeviceComposable {
  isMobile: ComputedRef<boolean>;
  isDesktop: ComputedRef<boolean>;
  windowWidth: Ref<number>;
}

export function useMobile(): DeviceComposable {
  const windowWidth = ref(0);

  const isMobile = computed(() => windowWidth.value < MOBILE_BREAKPOINT);
  const isDesktop = computed(() => windowWidth.value >= MOBILE_BREAKPOINT);

  const handleResize = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  return {
    isMobile,
    isDesktop,
    windowWidth,
  };
}
