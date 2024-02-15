import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Navbar
        fluid
        rounded
        className="border border-1"
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          padding: "5px",
          margin: "10px 0",
        }}
      >
        <Navbar.Brand>{t("dashboard")}</Navbar.Brand>
        <div className="flex md:order-2">
          {i18n.language == "ar" ? (
            <Button
              label="2"
              className="text-black mx-2"
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              En
            </Button>
          ) : (
            <Button
              label="2"
              className="text-black mx-2"
              onClick={() => {
                i18n.changeLanguage("ar");
              }}
            >
              Ar
            </Button>
          )}

          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                className="w-[50px]"
              />
            }
          >
            <Dropdown.Header className="bg-[#fff]">
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
}
