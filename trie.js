class trieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class trie {
  constructor() {
    this.root = new trieNode();
  }
  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new trieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }

  print(node = this.root, currword = "") {
    if (node.isEndOfWord) {
      console.log(currword);
    }
    for (const char in node.children) {
      this.print(node.children[char], currword + char);
    }
  }

  autoComplete(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let list = [];
    this.collectWord(node, word, list);
    return list;
  }

  collectWord(node, word, list) {
    if (node.isEndOfWord) {
      list.push(word);
    }
    for (let char in node.children) {
      this.collectWord(node.children[char], word + char, list);
    }
  }
}
const newTrie = new trie();
newTrie.insert("akash");
newTrie.insert("akhj");
// newTrie.print()
// console.log(newTrie.search('j'));
console.log(newTrie.autoComplete("ak"));

//helo
