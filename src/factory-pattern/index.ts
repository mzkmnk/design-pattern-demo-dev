abstract class Animal {
  abstract speak():string;

  abstract name():string;

  abstract age():number;
}


class Dog implements Animal {
  speak(): string {
    return "wan wan";
  }

  name(): string {
    return "dog";
  }

  age(): number {
    return 3;
  }
}

class Cat implements Animal {
  speak(): string {
    return "miao miao";
  }

  name(): string {
    return "cat";
  }

  age(): number {
    return 2;
  }
}

const animalMap = {
  dog:Dog,
  cat:Cat
}

function AnimalFactory(animal: keyof typeof animalMap): Animal {
  return new animalMap[animal]();
}

const dog = AnimalFactory("dog");

console.log(dog.speak());