import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '免费',
    Svg: require('@site/static/img/official/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        大部分功能免费的插件，部分功能需赞助后使用
      </>
    ),
  },
  {
    title: '易用',
    Svg: require('@site/static/img/official/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        设置简单，不复杂，有很多预设
      </>
    ),
  },
  {
    title: '不好看',
    Svg: require('@site/static/img/official/undraw_docusaurus_react.svg').default,
    description: (
      <>
        界面一般，凑活着用吧
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
