class TreeNode {
    left?: TreeNode;
    right?: TreeNode;
    val: string;
    constructor(val: any) {
        this.val = val;
    }
}

/**
 *                1
 *        2               3
 *   4                           5
 *        6
 * 
 *   7         8
 * 
 */

const rootNode = new TreeNode(1);
const node1 = new TreeNode(2);
const node2 = new TreeNode(3);
rootNode.left = node1;
rootNode.right = node2;

const node3= new TreeNode(4);
node1.left = node3;

const node4= new TreeNode(6);
node3.right = node4;

const node5 = new TreeNode(7);
const node6 = new TreeNode(8);
node4.left = node5;
node4.right = node6;


const node7 = new TreeNode(5);
node2.right = node7;





// 1. 二叉树递归先序遍历
const preOrderTraversal = (root?: TreeNode) => {
    if (!root) {
        return;
    }
    console.log(root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
}

// console.log('先序递归遍历结果:');
// preOrderTraversal(rootNode);

// 2. 二叉树非递归先序遍历
const preStackTraversal = (root?: TreeNode) => {
    if (!root) {
        return;
    }
    const array: TreeNode[] = [];
   
    let currentRoot = root;
    while(array.length > 0 || currentRoot) {
        while(currentRoot != null) {
            console.log(currentRoot.val);
            array.push(currentRoot);
            currentRoot = currentRoot.left;
        }
        if(array.length > 0) {
            currentRoot = array.pop()?.right;
        }
    }
}

// console.log('先序非递归遍历');
// preStackTraversal(rootNode);


// 3. 二叉树递归中序遍历
const middleOrderTraversal = (root?: TreeNode) => {
    if (!root) {
        return;
    }
    middleOrderTraversal(root.left);
    console.log(root.val);
    middleOrderTraversal(root.right);
}

// console.log('中序递归遍历结果:');
// middleOrderTraversal(rootNode);

// 4. 二叉树非递归中序遍历
const middleStackTraversal = (root?: TreeNode) => {
    if (!rootNode) {
        return;
    }
    const nodes: TreeNode[] = [];
    let currentNode = root;

    while(currentNode || nodes.length > 0) {
        while(currentNode != null) {
            nodes.push(currentNode);
            currentNode = currentNode.left;
        }
        currentNode = nodes.pop();
        if (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.right;
        }
    }
}

// console.log('中序非递归遍历结果：');
// middleStackTraversal(rootNode);

// 5. 二叉树递归后序遍历
const postOrderTraversal = (root?: TreeNode) => {
    if (!root) {
        return;
    }
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.val);
}

console.log('后序递归遍历结果');
postOrderTraversal(rootNode);


// 6. 二叉树非递归后序遍历
const postStackTraversal = (root?: TreeNode) => {
    if (!root) {
        return;
    }
    const nodes: TreeNode[] = [];
    let currentNode = root;
    let lastVisit = root;
    while(currentNode || nodes.length > 0) {
        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.left;
        }

        if (nodes.length > 0) {
            currentNode = nodes[nodes.length - 1];
            if (!currentNode.right || currentNode.right == lastVisit) {
                console.log(currentNode.val);
                nodes.pop();
                lastVisit = currentNode;
                currentNode = null;     
            } else {
                currentNode = currentNode.right;
            }
        }
    }       
}
console.log('后序非递归遍历结果');
postStackTraversal(rootNode);

