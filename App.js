const parent = React.createElement('div',{id:'parent'}, React.createElement('div', {id:"child"},[React.createElement('h1',{id:"head", key:'123'},'Heading tag 1'),React.createElement('h2',{id:"head2", key:'abc'},'Heading tag 2')]));

// const heading = React.createElement("h1", {id:'heading', className: 'heading'}, "Hello World From React");

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(parent);