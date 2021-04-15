let obj = {
type: "ul", props: {'class': 'list'},  children: [
{type: "ul", props: {}, children: ['item1'] },
{type: "ul", props: {}, children: ['item2'] }
]
}

function h(type, props, ...children) {
   return {type, props, children};
}

function createElement(element) {
  if(typeof element == "string") {
   return document.createTextNode(element);
  }
  
  let $ele = document.createElement(element.type);
  
  element.children.map(createElement).forEach($ele.appendChild.bind($ele));
  
  return $ele;
}

function change(node1, node2) {
return typeof node1 !== typeof node2 || 
      (typeof node1 == "string" && node1 == node2) ||
      node1.type != node2.type
}


function updateElement($parent, newNode, oldNode, index=0) {
 if(!oldNode) {
  $parent.appendChild(newNode);
 } else if(!newNode) {
  $parent.removeChild($parent.childNodes[index]);
 } else if(change(newNode, oldNode)) {
   $parent.replaceChild(createElement(newnNode), $parent.childNodes[index]);
 } else if(newNode.type) {
  let child1 = newNode.children.length;
  let child2 = newNode.children.length;
  for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
 }
}
