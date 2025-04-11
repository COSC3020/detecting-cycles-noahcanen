function hasCycle(graph) {
    for (let i = 0; i < graph.length; i++) {
        if (checkNode(i, [],graph)) { return true; };
    }
    return false;
}
function checkNode(node, seen, graph) {
    if (seen.includes(node)) { return true; }
    seen.push(node);
    for (let j = 0; j < graph[node].length; j++) {
        if (checkNode(graph[node][j], [...seen],graph)) { return true; }
    }
    return false;
}
