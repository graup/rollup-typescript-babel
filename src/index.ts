import { someHelpfulUtilFunction } from './util';


export interface Props {
  x: number;
  y: number;
}

export class Value {
  private value = 10
  private props: Props = { x: 0, y: 0 };

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  setProps(props: Props): void {
    this.props = props;
  }

  getProps(): Props {
    return someHelpfulUtilFunction(this.props);
  }
}

export { someHelpfulUtilFunction };

