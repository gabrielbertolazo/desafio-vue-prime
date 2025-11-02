import { useDialog } from "primevue/usedialog";
import { useLogoutModal } from "@/composables/useLogoutModal.ts";
import LogoutModal from "@/components/LogoutModal/LogoutModal.vue";
import { useTheme } from "./useTheme";
import Toggle from "@/components/Toggle/Toggle.vue";

export function useSidebar() {
  const dialog = useDialog();
  const { getLogoutModalProps, redirectToHomePage } = useLogoutModal();
  const { toggleTheme } = useTheme();
  const items = [
    {
      label: "Tema",
      icon: 'pi pi-palette',
      isComponent: true,
      component: Toggle,
      props: {
        onClick: toggleTheme,
        label: "Alternar Tema",
        name: 'themeToggle',
      }
    },
    {
      label: "Pagina inicial",
      icon: "pi pi-home",
      route: "/",
    },
    {
      label: "Configurações de privacidade",
      icon: "pi pi-shield",
      route: "/settings/privacy",
    },
    {
      label: "Detalhes da conta",
      icon: "pi pi-user",
      route: "/settings/account",
    },
    {
      label: "Sobre",
      icon: "pi pi-info-circle",
      route: "/settings/about",
    },
    {
      label: "Sair",
      icon: "pi pi-sign-out",
      action: () => {
        dialog.open(LogoutModal, {
          props: getLogoutModalProps(),
          onClose: (payload) => {
            if (payload?.data === "dialog-close") {
              console.log("Usuário deslogado com sucesso.");
              redirectToHomePage();
            }
          },
        });
      },
    },
  ];

  return {
    items,
  };
}
