import HtmlBasics from '@/components/exercises/HtmlBasics';
import CssLayout from '@/components/exercises/CssLayout';
import JsDom from '@/components/exercises/JsDom';

const components = {
  'html-basics': HtmlBasics,
  'css-layout': CssLayout,
  'js-dom': JsDom
};

export function getExerciseComponent(id) {
  return components[id] || (() => <div>练习不存在</div>);
}