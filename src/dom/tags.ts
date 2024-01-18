import { createElement } from "./element";

type CommonProps = {
    children?: string[];
    content?: string;
}

type CombinedProps<T> = T & CommonProps;

export const A = createElement<CombinedProps<HTMLAnchorElement>>('a');
export const Abbr = createElement<CombinedProps<HTMLElement>>('abbr');
export const Address = createElement<CombinedProps<HTMLElement>>('address');
export const Area = createElement<CombinedProps<HTMLAreaElement>>('area');
export const Article = createElement<CombinedProps<HTMLElement>>('article');
export const Aside = createElement<CombinedProps<HTMLElement>>('aside');
export const Audio = createElement<CombinedProps<HTMLAudioElement>>('audio');
export const B = createElement<CombinedProps<HTMLElement>>('b');
export const Base = createElement<CombinedProps<HTMLBaseElement>>('base');
export const Bdi = createElement<CombinedProps<HTMLElement>>('bdi');
export const Bdo = createElement<CombinedProps<HTMLElement>>('bdo');
export const Blockquote = createElement<CombinedProps<HTMLQuoteElement>>('blockquote');
export const Body = createElement<CombinedProps<HTMLBodyElement>>('body');
export const Br = createElement<CombinedProps<HTMLBRElement>>('br');
export const Button = createElement<CombinedProps<HTMLButtonElement>>('button');
export const Canvas = createElement<CombinedProps<HTMLCanvasElement>>('canvas');
export const Caption = createElement<CombinedProps<HTMLTableCaptionElement>>('caption');
export const Cite = createElement<CombinedProps<HTMLElement>>('cite');
export const Code = createElement<CombinedProps<HTMLElement>>('code');
export const Col = createElement<CombinedProps<HTMLTableColElement>>('col');
export const Colgroup = createElement<CombinedProps<HTMLTableColElement>>('colgroup');
export const Data = createElement<CombinedProps<HTMLDataElement>>('data');
export const Datalist = createElement<CombinedProps<HTMLDataListElement>>('datalist');
export const Dd = createElement<CombinedProps<HTMLElement>>('dd');
export const Del = createElement<CombinedProps<HTMLModElement>>('del');
export const Details = createElement<CombinedProps<HTMLDetailsElement>>('details');
export const Dfn = createElement<CombinedProps<HTMLElement>>('dfn');
export const Dialog = createElement<CombinedProps<HTMLDialogElement>>('dialog');
export const Div = createElement<CombinedProps<HTMLDivElement>>('div');
export const Dl = createElement<CombinedProps<HTMLDListElement>>('dl');
export const Dt = createElement<CombinedProps<HTMLElement>>('dt');
export const Em = createElement<CombinedProps<HTMLElement>>('em');
export const Embed = createElement<CombinedProps<HTMLEmbedElement>>('embed');
export const Fieldset = createElement<CombinedProps<HTMLFieldSetElement>>('fieldset');
export const Figcaption = createElement<CombinedProps<HTMLElement>>('figcaption');
export const Figure = createElement<CombinedProps<HTMLElement>>('figure');
export const Footer = createElement<CombinedProps<HTMLElement>>('footer');
export const Form = createElement<CombinedProps<HTMLFormElement>>('form');
export const H1 = createElement<CombinedProps<HTMLHeadingElement>>('h1');
export const H2 = createElement<CombinedProps<HTMLHeadingElement>>('h2');
export const H3 = createElement<CombinedProps<HTMLHeadingElement>>('h3');
export const H4 = createElement<CombinedProps<HTMLHeadingElement>>('h4');
export const H5 = createElement<CombinedProps<HTMLHeadingElement>>('h5');
export const H6 = createElement<CombinedProps<HTMLHeadingElement>>('h6');
export const Head = createElement<CombinedProps<HTMLHeadElement>>('head');
export const Header = createElement<CombinedProps<HTMLElement>>('header');
export const Hr = createElement<CombinedProps<HTMLHRElement>>('hr');
export const Html = createElement<CombinedProps<HTMLHtmlElement>>('html');
export const I = createElement<CombinedProps<HTMLElement>>('i');
export const Iframe = createElement<CombinedProps<HTMLIFrameElement>>('iframe');
export const Img = createElement<CombinedProps<HTMLImageElement>>('img');
export const Input = createElement<CombinedProps<HTMLInputElement>>('input');
export const Ins = createElement<CombinedProps<HTMLModElement>>('ins');
export const Kbd = createElement<CombinedProps<HTMLElement>>('kbd');
export const Label = createElement<CombinedProps<HTMLLabelElement>>('label');
export const Legend = createElement<CombinedProps<HTMLLegendElement>>('legend');
export const Li = createElement<CombinedProps<HTMLLIElement>>('li');
export const Link = createElement<CombinedProps<HTMLLinkElement>>('link');
export const Main = createElement<CombinedProps<HTMLElement>>('main');
export const Map = createElement<CombinedProps<HTMLMapElement>>('map');
export const Mark = createElement<CombinedProps<HTMLElement>>('mark');
export const Math = createElement<CombinedProps<MathMLElement>>('math');
export const Menu = createElement<CombinedProps<HTMLMenuElement>>('menu');
export const Meta = createElement<CombinedProps<HTMLMetaElement>>('meta');
export const Meter = createElement<CombinedProps<HTMLMeterElement>>('meter');
export const Nav = createElement<CombinedProps<HTMLElement>>('nav');
export const Noscript = createElement<CombinedProps<HTMLElement>>('noscript');
export const Object = createElement<CombinedProps<HTMLObjectElement>>('object');
export const Ol = createElement<CombinedProps<HTMLOListElement>>('ol');
export const Optgroup = createElement<CombinedProps<HTMLOptGroupElement>>('optgroup');
export const Option = createElement<CombinedProps<HTMLOptionElement>>('option');
export const Output = createElement<CombinedProps<HTMLOutputElement>>('output');
export const P = createElement<CombinedProps<HTMLParagraphElement>>('p');
export const Param = createElement<CombinedProps<HTMLParamElement>>('param');
export const Picture = createElement<CombinedProps<HTMLPictureElement>>('picture');
export const Pre = createElement<CombinedProps<HTMLPreElement>>('pre');
export const Progress = createElement<CombinedProps<HTMLProgressElement>>('progress');
export const Q = createElement<CombinedProps<HTMLQuoteElement>>('q');
export const Rp = createElement<CombinedProps<HTMLElement>>('rp');
export const Rt = createElement<CombinedProps<HTMLElement>>('rt');
export const Ruby = createElement<CombinedProps<HTMLElement>>('ruby');
export const S = createElement<CombinedProps<HTMLElement>>('s');
export const Samp = createElement<CombinedProps<HTMLElement>>('samp');
export const Script = createElement<CombinedProps<HTMLScriptElement>>('script');
export const Section = createElement<CombinedProps<HTMLElement>>('section');
export const Select = createElement<CombinedProps<HTMLSelectElement>>('select');
export const Slot = createElement<CombinedProps<HTMLSlotElement>>('slot');
export const Small = createElement<CombinedProps<HTMLElement>>('small');
export const Source = createElement<CombinedProps<HTMLSourceElement>>('source');
export const Span = createElement<CombinedProps<HTMLSpanElement>>('span');
export const Strong = createElement<CombinedProps<HTMLElement>>('strong');
export const Style = createElement<CombinedProps<HTMLStyleElement>>('style');
export const Sub = createElement<CombinedProps<HTMLElement>>('sub');
export const Summary = createElement<CombinedProps<HTMLElement>>('summary');
export const Sup = createElement<CombinedProps<HTMLElement>>('sup');
export const Svg = createElement<CombinedProps<SVGSVGElement>>('svg');
export const Table = createElement<CombinedProps<HTMLTableElement>>('table');
export const Tbody = createElement<CombinedProps<HTMLTableSectionElement>>('tbody');
export const Td = createElement<CombinedProps<HTMLTableDataCellElement>>('td');
export const Template = createElement<CombinedProps<HTMLTemplateElement>>('template');
export const Textarea = createElement<CombinedProps<HTMLTextAreaElement>>('textarea');
export const Tfoot = createElement<CombinedProps<HTMLTableSectionElement>>('tfoot');
export const Th = createElement<CombinedProps<HTMLTableHeaderCellElement>>('th');
export const Thead = createElement<CombinedProps<HTMLTableSectionElement>>('thead');
export const Time = createElement<CombinedProps<HTMLTimeElement>>('time');
export const Title = createElement<CombinedProps<HTMLTitleElement>>('title');
export const Tr = createElement<CombinedProps<HTMLTableRowElement>>('tr');
export const Track = createElement<CombinedProps<HTMLTrackElement>>('track');
export const U = createElement<CombinedProps<HTMLElement>>('u');
export const Ul = createElement<CombinedProps<HTMLUListElement>>('ul');
export const Var = createElement<CombinedProps<HTMLElement>>('var');
export const Video = createElement<CombinedProps<HTMLVideoElement>>('video');
export const Wbr = createElement<CombinedProps<HTMLElement>>('wbr');