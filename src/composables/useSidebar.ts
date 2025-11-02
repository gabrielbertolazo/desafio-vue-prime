import { useDialog } from "primevue/usedialog";
import { useLogoutModal } from "@/composables/useLogoutModal.ts";
import LogoutModal from "@/components/LogoutModal/LogoutModal.vue";

export function useSidebar() {
  const dialog = useDialog();
  const { getLogoutModalProps, redirectToHomePage } = useLogoutModal();
  const items = [
    {
      label: "Home Page",
      icon: "pi pi-home",
      route: "/",
    },
    {
      label: "Privacy Settings",
      icon: "pi pi-shield",
      route: "/settings/privacy",
    },
    {
      label: "Account Details",
      icon: "pi pi-user",
      route: "/settings/account",
    },
    {
      label: "About",
      icon: "pi pi-info-circle",
      route: "/settings/about",
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      action: () => {
        dialog.open(LogoutModal, {
          props: getLogoutModalProps(),
          onClose: (payload) => {
            if (payload?.data === 'dialog-close') {
              console.log('Usuário deslogado com sucesso.');
              redirectToHomePage()
            }
        }
        });
      },
    },
  ];

  return {
    items,
  };
}
