import { Syntax } from 'esprima';
import NodeMutator from './NodeMutator';
import { IdentifiedNode } from './IdentifiedNode';

/**
 * Represents a mutator which can remove the content of a BlockStatement.
 */
export default class BlockStatementMutator implements NodeMutator {
  name = 'BlockStatement';
  private type = Syntax.BlockStatement;

  constructor() { }

  applyMutations(node: IdentifiedNode, copy: <T extends IdentifiedNode> (obj: T, deep?: boolean) => T): void | IdentifiedNode {
    if (node.type === this.type && node.body.length > 0) {
      let mutatedNode = copy(node);
      mutatedNode.body = [];
      return mutatedNode;
    }
  }
}
