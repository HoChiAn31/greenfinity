import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space, message } from "antd";
import { FC, useState } from "react";

interface SwitchLanguageProps {
  flag?: string;
  label?: string;
}

const SwitchLanguage: FC<SwitchLanguageProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeKey, setActiveKey] = useState("VIE"); // Default active key

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setActiveKey(e.key); // Update active key
    message.info(`Switched to ${e.key} language.`);
    console.log("click", e);
  };

  // Data for languages with flags
  const data = [
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
      language: "VIE",
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
      language: "ENG",
    },
  ];

  // Transform data into menu items
  const items: MenuProps["items"] = data.map((item) => ({
    label: (
      <div
        className={`flex items-center relative z-[9999999]  ${
          activeKey === item.language ? "text-primary-400 " : ""
        }`}
      >
        <img
          src={item.flag}
          alt={item.language}
          style={{ width: 20, height: 15, marginRight: 8 }}
        />
        <span className={`text-lg  font-['Open Sans'] leading-snug`}>
          {item.language}
        </span>
      </div>
    ),
    key: item.language,
  }));

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const handleDropdownVisibleChange = (visible: boolean) => {
    setIsOpen(visible);
  };

  return (
    <div className="">
      <Dropdown
        menu={menuProps}
        trigger={["click"]}
        onOpenChange={handleDropdownVisibleChange}
        className=""
      >
        <Button className="py-5 border border-primary-500 ">
          <Space>
            <img
              src={data.find((item) => item.language === activeKey)?.flag}
              alt={activeKey}
              className="h-[18px] w-[18px] rounded-full"
            />
            <p className="text-primary-500 text-lg font-bold font-['Open Sans'] leading-snug">
              {activeKey}
            </p>
            {isOpen ? (
              <UpOutlined
                width={16}
                height={16}
                className="text-primary-500 font-bold"
              />
            ) : (
              <DownOutlined
                width={16}
                height={16}
                className="text-primary-500 font-bold"
              />
            )}
          </Space>
        </Button>
      </Dropdown>
    </div>
  );
};

export default SwitchLanguage;
