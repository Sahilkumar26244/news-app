let navbar = () => {
    return `
    
    <h2><a href="index.html"></a>News App</h2>
  
    <div id="search_bar">
        <input type="text" id="search_input" />
    </div>
    
    `
};

let sidebar = () => {
    return `
    <h2>Countries</h2>
      <h3 id="in">India</h3>
      <h3 id="ch">China</h3>
      <h3 id="us">Usa</h3>
      <h3 id="uk">United Kingdom</h3>
      <h3 id="nz">New Zealand</h3>
    `
}

export {navbar , sidebar} ;