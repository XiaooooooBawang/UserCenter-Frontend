import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'XiaooooooBawang出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'XiaooooooBawang blog',
          title: 'XiaooooooBawang blog',
          href: 'http://xiaoooooobawang.xyz/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />XiaooooooBawang github</>,
          href: 'https://github.com/XiaooooooBawang',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
