import type { DialogProps } from "primevue";
import { useRouter } from "vue-router";

export function useLogoutModal() {
  const router = useRouter();

  const getLogoutModalProps = (): DialogProps => {
    return {
      header: "Tem certeza que deseja sair?",
      modal: true,
      closable: false,
      style: {
        width: "500px",
        padding: "1rem",
        margin: "1rem",
      },
    };
  };

  const redirectToHomePage = () => {
    router.push('/')
  }

  return {
    getLogoutModalProps,
    redirectToHomePage
  };
}
