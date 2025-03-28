abstract class Button {
  abstract render():void;

  abstract onClick():void;

  abstract onFocus():void;
}


// 要求に基づいてTextFieldを追加する
// demoなので関数は少し適当
abstract class TextField {
  abstract renderText():void;
}

class WindowsTextField implements TextField {
  renderText() {
    console.log('Creating Windows Text Field');
  }
}

class MacTextField implements TextField {
  renderText() {
    console.log('Creating Mac Text Field');
  }
}


class WindowsButton implements Button {
  render() {
    console.log('Rendering Windows Button');
  }

  onClick() {
    console.log('Windows Button Clicked');
  }

  onFocus() {
    console.log('Windows Button Focused');
  }
}

class MacButton implements Button {
  render() {
    console.log('Rendering Mac Button');
  }

  onClick() {
    console.log('Mac Button Clicked');
  }

  onFocus() {
    console.log('Mac Button Focused');
  }
}

abstract class GUIFactoryInterface {
  abstract createButton():Button;

  abstract createTextField():TextField;
}

class WindowsFactory implements GUIFactoryInterface {
  createButton() {
    return new WindowsButton();
  }

  createTextField() {
    return new WindowsTextField();
  }
}

class MacFactory implements GUIFactoryInterface {
  createButton() {
    return new MacButton();
  }

  createTextField() {
    return new MacTextField();
  }
}


// client


// 仮のenvファイル
const ENV:'windows'|'mac' = 'windows';

function initialize(){
  switch (ENV) {
    case "windows":
      return new WindowsFactory();
    case "mac":
      return new MacFactory();
  }
}

const factory = initialize();

const button = factory.createButton();

button.render();

const textField = factory.createTextField();

textField.renderText();