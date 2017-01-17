let image = React.createElement('img', {src: 'https://facebook.github.io/react/img/logo.svg'});
let title = React.createElement('h1', null, 'Hello, world');
var subtitle = React.createElement('p', null, 'React');
let container = React.createElement('div', {className: 'container'}, image, title, subtitle);
let element = React.createElement('h1', null, 'Hello, world!');
ReactDOM.render(container, document.getElementById('root'));