function hasCycle(graph) {
    seenNode = new Array(graph.length).fill(false)
    for (let i = 0; i < graph.length; i++) {
        if (!seenNode[i]){

            if (checkNode(i, [],graph)) { return true}
        }
    }
    return false
}
function checkNode(node, seen, graph,seenNode) {
    if (seen.includes(node)) { return true}
    seenNode[node] = true
    seen.push(node)
    for (let j = 0; j < graph[node].length; j++) {
        if (checkNode(graph[node][j], [...seen],graph)) { return true}
    }
    return false
}
