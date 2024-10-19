// Clase Sujeto (Subject) que representa el inventario
class Inventory {
    constructor(product, stock) {
        this.product = product;
        this.stock = stock;
        this.observers = [];
    }

    // Agregar un observador
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Eliminar un observador
    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notificar a todos los observadores
    notify() {
        this.observers.forEach(observer => observer.update(this.product, this.stock));
    }

    // Método para cambiar el stock
    updateStock(newStock) {
        console.log(`Actualizando el stock del producto "${this.product}" a ${newStock} unidades.`);
        this.stock = newStock;
        this.notify(); // Notificar a los observadores sobre el cambio
    }
}

// Clase Observador (Observer) para la tienda física
class PhysicalStore {
    update(product, stock) {
        console.log(`[Tienda Física] El stock del producto "${product}" ha cambiado a ${stock} unidades.`);
    }
}

// Clase Observador (Observer) para la tienda en línea
class OnlineStore {
    update(product, stock) {
        console.log(`🛒 [Tienda en Línea] El stock del producto "${product}" ha cambiado a ${stock} unidades.`);
    }
}

// Ejemplo de uso práctico

// Crear un inventario para un producto
const inventory = new Inventory('Laptop', 10);

// Crear los observadores
const physicalStore = new PhysicalStore();
const onlineStore = new OnlineStore();

// Agregar los observadores al inventario
inventory.addObserver(physicalStore);
inventory.addObserver(onlineStore);

// Actualizar el stock y notificar a los observadores
inventory.updateStock(5);

// Eliminar un observador y actualizar el stock nuevamente
inventory.removeObserver(physicalStore);
inventory.updateStock(2);
