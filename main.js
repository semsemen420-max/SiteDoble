// ==========================================
// ДАННЫЕ ТОВАРОВ (100 товаров с исправленными изображениями)
// ==========================================

const products = [
    // Игрушки (40 товаров)
    { id: 1, name: 'Плюшевый мишка "Тедди"', category: 'toys', price: 1599, oldPrice: 1999, image: 'product-teddy.jpg', badge: '-20%', age: '0-2' },
    { id: 2, name: 'Конструктор "Город мечты"', category: 'toys', price: 2499, image: 'product-constructor.jpg', badge: 'Новинка', age: '6-9' },
    { id: 3, name: 'Пазл "Животные" 500 деталей', category: 'toys', price: 699, image: 'product-puzzle.jpg', age: '6-9' },
    { id: 4, name: 'Интерактивный робот', category: 'toys', price: 3299, image: 'product-robot.jpg', badge: 'Новинка', age: '10+' },
    { id: 5, name: 'Мягкая игрушка "Единорог"', category: 'toys', price: 1299, image: 'product-unicorn.jpg', age: '0-2' },
    { id: 6, name: 'Конструктор LEGO Classic', category: 'toys', price: 2999, image: 'product-lego.jpg', age: '6-9' },
    { id: 7, name: 'Кукла "Принцесса Эльза"', category: 'toys', price: 1899, oldPrice: 2299, image: 'product-doll.jpg', badge: '-17%', age: '3-5' },
    { id: 8, name: 'Машинка на радиоуправлении', category: 'toys', price: 2599, image: 'product-rc-car.jpg', age: '6-9' },
    { id: 9, name: 'Набор для рисования', category: 'toys', price: 899, image: 'product-art-set.jpg', age: '3-5' },
    { id: 10, name: 'Мяч футбольный детский', category: 'toys', price: 599, image: 'product-soccer-ball.jpg', age: '6-9' },
    { id: 11, name: 'Плюшевый зайчик', category: 'toys', price: 1199, image: 'product-bunny.jpg', age: '0-2' },
    { id: 12, name: 'Конструктор "Замок"', category: 'toys', price: 3499, image: 'product-castle.jpg', badge: 'Хит', age: '6-9' },
    { id: 13, name: 'Набор солдатиков', category: 'toys', price: 799, image: 'product-soldiers.jpg', age: '6-9' },
    { id: 14, name: 'Интерактивная собачка', category: 'toys', price: 2899, image: 'product-dog.jpg', age: '3-5' },
    { id: 15, name: 'Пазл "Динозавры" 1000 деталей', category: 'toys', price: 899, image: 'product-dino-puzzle.jpg', age: '10+' },
    { id: 16, name: 'Кукольный домик', category: 'toys', price: 4999, image: 'product-dollhouse.jpg', badge: 'Хит', age: '3-5' },
    { id: 17, name: 'Набор машинок 10 шт', category: 'toys', price: 1299, image: 'product-cars-set.jpg', age: '3-5' },
    { id: 18, name: 'Плюшевый слоник', category: 'toys', price: 1399, image: 'product-elephant.jpg', age: '0-2' },
    { id: 19, name: 'Конструктор "Космос"', category: 'toys', price: 2799, image: 'product-space.jpg', age: '10+' },
    { id: 20, name: 'Набор для лепки', category: 'toys', price: 699, image: 'product-clay.jpg', age: '3-5' },
    { id: 21, name: 'Йо-йо светящееся', category: 'toys', price: 399, image: 'product-yoyo.jpg', age: '6-9' },
    { id: 22, name: 'Мягкая игрушка "Дракон"', category: 'toys', price: 1599, image: 'product-dragon.jpg', age: '3-5' },
    { id: 23, name: 'Конструктор "Ферма"', category: 'toys', price: 2299, image: 'product-farm.jpg', age: '3-5' },
    { id: 24, name: 'Набор фигурок животных', category: 'toys', price: 999, image: 'product-animals.jpg', age: '3-5' },
    { id: 25, name: 'Интерактивный планшет', category: 'toys', price: 3599, image: 'product-tablet.jpg', badge: 'Новинка', age: '6-9' },
    { id: 26, name: 'Пазл "Карта мира"', category: 'toys', price: 799, image: 'product-map-puzzle.jpg', age: '10+' },
    { id: 27, name: 'Кукла "Барби"', category: 'toys', price: 1799, image: 'product-barbie.jpg', age: '3-5' },
    { id: 28, name: 'Набор для экспериментов', category: 'toys', price: 1999, image: 'product-science.jpg', age: '10+' },
    { id: 29, name: 'Мягкая игрушка "Панда"', category: 'toys', price: 1499, image: 'product-panda.jpg', age: '0-2' },
    { id: 30, name: 'Конструктор "Пиратский корабль"', category: 'toys', price: 3299, image: 'product-pirate-ship.jpg', age: '6-9' },
    { id: 31, name: 'Скакалка со счетчиком', category: 'toys', price: 499, image: 'product-jump-rope.jpg', age: '6-9' },
    { id: 32, name: 'Набор кубиков', category: 'toys', price: 899, image: 'product-blocks.jpg', age: '0-2' },
    { id: 33, name: 'Интерактивный глобус', category: 'toys', price: 4299, image: 'product-globe.jpg', badge: 'Хит', age: '10+' },
    { id: 34, name: 'Пазл "Подводный мир"', category: 'toys', price: 699, image: 'product-underwater-puzzle.jpg', age: '6-9' },
    { id: 35, name: 'Кукла "Рапунцель"', category: 'toys', price: 1899, image: 'product-rapunzel.jpg', age: '3-5' },
    { id: 36, name: 'Набор для творчества', category: 'toys', price: 1299, image: 'product-creative.jpg', age: '6-9' },
    { id: 37, name: 'Мягкая игрушка "Жираф"', category: 'toys', price: 1699, image: 'product-giraffe.jpg', age: '0-2' },
    { id: 38, name: 'Конструктор "Робот-трансформер"', category: 'toys', price: 2999, image: 'product-transformer.jpg', age: '10+' },
    { id: 39, name: 'Набор пластилина 24 цвета', category: 'toys', price: 599, image: 'product-playdough.jpg', age: '3-5' },
    { id: 40, name: 'Интерактивная книга-планшет', category: 'toys', price: 2799, image: 'product-book-tablet.jpg', age: '3-5' },

    // Одежда (25 товаров)
    { id: 41, name: 'Платье "Принцесса"', category: 'clothes', price: 2124, oldPrice: 2499, image: 'product-dress.jpg', badge: '-15%', age: '3-5' },
    { id: 42, name: 'Куртка демисезонная', category: 'clothes', price: 1599, image: 'product-jacket.jpg', age: '6-9' },
    { id: 43, name: 'Футболка с принтом "Динозавр"', category: 'clothes', price: 599, image: 'product-dino-tshirt.jpg', age: '3-5' },
    { id: 44, name: 'Джинсы детские', category: 'clothes', price: 1299, image: 'product-jeans.jpg', age: '6-9' },
    { id: 45, name: 'Платье "Единорог"', category: 'clothes', price: 1999, image: 'product-unicorn-dress.jpg', age: '3-5' },
    { id: 46, name: 'Толстовка с капюшоном', category: 'clothes', price: 1499, image: 'product-hoodie.jpg', age: '6-9' },
    { id: 47, name: 'Комплект белья 3 шт', category: 'clothes', price: 899, image: 'product-underwear.jpg', age: '3-5' },
    { id: 48, name: 'Пижама "Звездочки"', category: 'clothes', price: 1199, image: 'product-pajamas.jpg', age: '3-5' },
    { id: 49, name: 'Куртка зимняя', category: 'clothes', price: 3499, image: 'product-winter-jacket.jpg', badge: 'Новинка', age: '6-9' },
    { id: 50, name: 'Платье нарядное', category: 'clothes', price: 2799, image: 'product-party-dress.jpg', age: '6-9' },
    { id: 51, name: 'Свитер вязаный', category: 'clothes', price: 1799, image: 'product-sweater.jpg', age: '6-9' },
    { id: 52, name: 'Шорты джинсовые', category: 'clothes', price: 999, image: 'product-shorts.jpg', age: '6-9' },
    { id: 53, name: 'Платье "Бабочки"', category: 'clothes', price: 1899, image: 'product-butterfly-dress.jpg', age: '3-5' },
    { id: 54, name: 'Ветровка спортивная', category: 'clothes', price: 1699, image: 'product-windbreaker.jpg', age: '10+' },
    { id: 55, name: 'Комплект футболок 5 шт', category: 'clothes', price: 1499, image: 'product-tshirts-pack.jpg', age: '6-9' },
    { id: 56, name: 'Платье "Цветы"', category: 'clothes', price: 2199, image: 'product-flower-dress.jpg', age: '6-9' },
    { id: 57, name: 'Кофта флисовая', category: 'clothes', price: 1299, image: 'product-fleece.jpg', age: '3-5' },
    { id: 58, name: 'Брюки спортивные', category: 'clothes', price: 1199, image: 'product-sport-pants.jpg', age: '6-9' },
    { id: 59, name: 'Платье "Радуга"', category: 'clothes', price: 1799, image: 'product-rainbow-dress.jpg', age: '3-5' },
    { id: 60, name: 'Пальто осеннее', category: 'clothes', price: 3999, image: 'product-coat.jpg', age: '10+' },
    { id: 61, name: 'Костюм спортивный', category: 'clothes', price: 2499, image: 'product-sport-suit.jpg', age: '10+' },
    { id: 62, name: 'Платье "Горошек"', category: 'clothes', price: 1699, image: 'product-polka-dot.jpg', age: '3-5' },
    { id: 63, name: 'Жилет утепленный', category: 'clothes', price: 1899, image: 'product-vest.jpg', age: '6-9' },
    { id: 64, name: 'Комбинезон зимний', category: 'clothes', price: 4499, image: 'product-winter-overall.jpg', badge: 'Хит', age: '3-5' },
    { id: 65, name: 'Платье "Снежинки"', category: 'clothes', price: 2299, image: 'product-snow-dress.jpg', age: '6-9' },

    // Книги (20 товаров)
    { id: 66, name: 'Большая книга сказок', category: 'books', price: 899, image: 'product-fairy-tale-book.jpg', age: '3-5' },
    { id: 67, name: 'Детская энциклопедия', category: 'books', price: 1299, image: 'product-encyclopedia.jpg', age: '10+' },
    { id: 68, name: 'Азбука в картинках', category: 'books', price: 499, image: 'product-alphabet.jpg', age: '0-2' },
    { id: 69, name: 'Сказки Пушкина', category: 'books', price: 699, image: 'product-pushkin.jpg', age: '6-9' },
    { id: 70, name: 'Энциклопедия динозавров', category: 'books', price: 1199, image: 'product-dino-encyclopedia.jpg', age: '6-9' },
    { id: 71, name: 'Книга "Приключения"', category: 'books', price: 799, image: 'product-adventure-book.jpg', age: '10+' },
    { id: 72, name: 'Стихи для малышей', category: 'books', price: 399, image: 'product-poems.jpg', age: '0-2' },
    { id: 73, name: 'Энциклопедия животных', category: 'books', price: 1099, image: 'product-animal-encyclopedia.jpg', age: '6-9' },
    { id: 74, name: 'Сказки народов мира', category: 'books', price: 999, image: 'product-world-fairy-tales.jpg', age: '3-5' },
    { id: 75, name: 'Книга "Космос"', category: 'books', price: 1399, image: 'product-space-book.jpg', age: '10+' },
    { id: 76, name: 'Раскраска большая', category: 'books', price: 299, image: 'product-coloring.jpg', age: '3-5' },
    { id: 77, name: 'Энциклопедия техники', category: 'books', price: 1199, image: 'product-tech-encyclopedia.jpg', age: '10+' },
    { id: 78, name: 'Книга "Волшебные истории"', category: 'books', price: 899, image: 'product-magic-stories.jpg', age: '6-9' },
    { id: 79, name: 'Атлас мира для детей', category: 'books', price: 1499, image: 'product-world-atlas.jpg', age: '10+' },
    { id: 80, name: 'Книга "Приключения Буратино"', category: 'books', price: 599, image: 'product-buratino.jpg', age: '6-9' },
    { id: 81, name: 'Энциклопедия "Почемучка"', category: 'books', price: 1299, image: 'product-why-encyclopedia.jpg', age: '6-9' },
    { id: 82, name: 'Сказки Андерсена', category: 'books', price: 799, image: 'product-andersen.jpg', age: '6-9' },
    { id: 83, name: 'Книга "Мифы Древней Греции"', category: 'books', price: 999, image: 'product-greek-myths.jpg', age: '10+' },
    { id: 84, name: 'Энциклопедия "Тело человека"', category: 'books', price: 1399, image: 'product-human-body.jpg', age: '10+' },
    { id: 85, name: 'Книга "Русские народные сказки"', category: 'books', price: 699, image: 'product-russian-fairy-tales.jpg', age: '3-5' },

    // Аксессуары (15 товаров)
    { id: 86, name: 'Рюкзак "Космос"', category: 'accessories', price: 1799, image: 'product-space-backpack.jpg', badge: 'Хит', age: '6-9' },
    { id: 87, name: 'Пенал "Единорог"', category: 'accessories', price: 399, image: 'product-unicorn-pencil-case.jpg', age: '6-9' },
    { id: 88, name: 'Рюкзак "Динозавры"', category: 'accessories', price: 1699, image: 'product-dino-backpack.jpg', age: '3-5' },
    { id: 89, name: 'Сумка для обуви', category: 'accessories', price: 299, image: 'product-shoe-bag.jpg', age: '6-9' },
    { id: 90, name: 'Рюкзак "Принцесса"', category: 'accessories', price: 1899, image: 'product-princess-backpack.jpg', age: '3-5' },
    { id: 91, name: 'Ланч-бокс "Панда"', category: 'accessories', price: 599, image: 'product-panda-lunchbox.jpg', age: '3-5' },
    { id: 92, name: 'Рюкзак школьный', category: 'accessories', price: 2299, image: 'product-school-backpack.jpg', age: '10+' },
    { id: 93, name: 'Бутылка для воды', category: 'accessories', price: 399, image: 'product-water-bottle.jpg', age: '6-9' },
    { id: 94, name: 'Рюкзак "Супергерои"', category: 'accessories', price: 1799, image: 'product-superhero-backpack.jpg', age: '6-9' },
    { id: 95, name: 'Набор заколок', category: 'accessories', price: 299, image: 'product-hair-clips.jpg', age: '3-5' },
    { id: 96, name: 'Рюкзак "Футбол"', category: 'accessories', price: 1699, image: 'product-soccer-backpack.jpg', age: '10+' },
    { id: 97, name: 'Зонт детский', category: 'accessories', price: 699, image: 'product-umbrella.jpg', age: '6-9' },
    { id: 98, name: 'Рюкзак "Кошечки"', category: 'accessories', price: 1599, image: 'product-cat-backpack.jpg', age: '3-5' },
    { id: 99, name: 'Часы детские', category: 'accessories', price: 1299, image: 'product-watch.jpg', age: '10+' },
    { id: 100, name: 'Рюкзак "Радуга"', category: 'accessories', price: 1899, image: 'product-rainbow-backpack.jpg', badge: 'Новинка', age: '6-9' }
];

// ==========================================
// ИЗБРАННОЕ - ФУНКЦИОНАЛ
// ==========================================

class Favorites {
    constructor() {
        this.items = this.loadFavorites();
        this.updateFavoritesUI();
    }

    loadFavorites() {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(this.items));
    }

    addItem(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);

        if (!existingItem) {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category
            });
            this.saveFavorites();
            this.updateFavoritesUI();
            this.showNotification(`${product.name} добавлен в избранное!`, 'favorite');
        } else {
            this.removeItem(productId);
            this.showNotification(`${product.name} удален из избранного!`, 'favorite');
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveFavorites();
        this.updateFavoritesUI();
        if (window.location.pathname.includes('favorites.html')) {
            this.renderFavoritesPage();
        }
    }

    isInFavorites(productId) {
        return this.items.some(item => item.id === productId);
    }

    updateFavoritesUI() {
        // Обновляем счетчик в навигации
        const favoritesLinks = document.querySelectorAll('.nav-link[href="favorites.html"]');
        favoritesLinks.forEach(link => {
            const count = this.items.length;
            if (count > 0) {
                link.innerHTML = `❤️ Избранное (${count})`;
            } else {
                link.innerHTML = '❤️ Избранное';
            }
        });
    }

    showNotification(message, type = 'favorite') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'favorite' ? 'var(--gradient-primary)' : 'var(--gradient-secondary)'};
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            font-weight: 600;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    renderFavoritesPage() {
        const favoritesGrid = document.getElementById('favoritesGrid');
        const emptyFavorites = document.getElementById('emptyFavorites');

        if (!favoritesGrid) return;

        if (this.items.length === 0) {
            favoritesGrid.style.display = 'none';
            if (emptyFavorites) emptyFavorites.style.display = 'block';
            return;
        }

        if (emptyFavorites) emptyFavorites.style.display = 'none';
        favoritesGrid.style.display = 'grid';

        favoritesGrid.innerHTML = this.items.map(item => `
            <div class="product-card" onclick="window.location.href='product.html?id=${item.id}'" style="cursor: pointer;">
                <div class="product-image-wrapper">
                    <img src="images/${item.image}" alt="${item.name}" class="product-image">
                    <button onclick="favorites.removeItem(${item.id}); event.stopPropagation();" 
                            class="btn btn-outline" 
                            style="position: absolute; top: 1rem; left: 1rem; padding: 0.5rem; border-radius: 50%; background: white; z-index: 2;">
                        ❌
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-category">${getCategoryName(item.category)}</div>
                    <h3 class="product-title">${item.name}</h3>
                    <div class="product-price">${item.price} ₽</div>
                    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                        <button onclick="cart.addItem(${item.id}); event.stopPropagation();" class="btn btn-primary" style="flex: 1;">
                            🛒 В корзину
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Инициализация избранного
const favorites = new Favorites();

// ==========================================
// КОРЗИНА - ФУНКЦИОНАЛ
// ==========================================

class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    loadCart() {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    addItem(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showNotification(`${product.name} добавлен в корзину!`, 'cart');
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        if (window.location.pathname.includes('cart.html')) {
            this.renderCartPage();
        }
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
            this.updateCartUI();
            if (window.location.pathname.includes('cart.html')) {
                this.renderCartPage();
            }
        }
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }

    updateCartUI() {
        const cartButtons = document.querySelectorAll('.btn-primary');
        cartButtons.forEach(btn => {
            if (btn.textContent.includes('Корзина')) {
                const count = this.getItemCount();
                btn.innerHTML = `🛒 Корзина (${count})`;
            }
        });
    }

    showNotification(message, type = 'cart') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'cart' ? 'var(--gradient-secondary)' : 'var(--gradient-primary)'};
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
            font-weight: 600;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    renderCartPage() {
        const cartContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const itemsCount = document.getElementById('itemsCount');

        if (!cartContainer) return;

        if (this.items.length === 0) {
            cartContainer.innerHTML = `
                <div style="text-align: center; padding: 4rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">🛒</div>
                    <h2>Корзина пуста</h2>
                    <p style="color: var(--gray); margin-bottom: 2rem;">Добавьте товары из каталога</p>
                    <a href="catalog.html" class="btn btn-primary">Перейти в каталог</a>
                </div>
            `;
            if (cartTotal) cartTotal.textContent = '0';
            if (itemsCount) itemsCount.textContent = '0';
            return;
        }

        cartContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" style="display: flex; gap: 2rem; padding: 2rem; background: white; border-radius: var(--border-radius); margin-bottom: 1rem; align-items: center; box-shadow: var(--shadow-sm);">
                <img src="images/${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: var(--border-radius-sm);">
                <div style="flex: 1;">
                    <h3 style="margin-bottom: 0.5rem;">${item.name}</h3>
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color);">${item.price} ₽</div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" class="btn btn-outline" style="padding: 0.5rem 1rem;">-</button>
                    <span style="font-size: 1.2rem; font-weight: 600; min-width: 30px; text-align: center;">${item.quantity}</span>
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" class="btn btn-outline" style="padding: 0.5rem 1rem;">+</button>
                </div>
                <div style="font-size: 1.5rem; font-weight: 700; min-width: 120px; text-align: right;">
                    ${item.price * item.quantity} ₽
                </div>
                <button onclick="cart.removeItem(${item.id})" class="btn btn-outline" style="padding: 0.5rem 1rem;">🗑️</button>
            </div>
        `).join('');

        if (cartTotal) {
            cartTotal.textContent = this.getTotal().toLocaleString('ru-RU');
        }
        
        if (itemsCount) {
            itemsCount.textContent = this.getItemCount();
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
        if (window.location.pathname.includes('cart.html')) {
            this.renderCartPage();
        }
    }
}

// Инициализация корзины
const cart = new ShoppingCart();

// ==========================================
// УТИЛИТЫ
// ==========================================

function getCategoryName(category) {
    const names = {
        'toys': 'Игрушки',
        'clothes': 'Одежда',
        'books': 'Книги',
        'accessories': 'Аксессуары'
    };
    return names[category] || category;
}

function getAgeText(age) {
    const ages = {
        '0-2': '0-2 года',
        '3-5': '3-5 лет',
        '6-9': '6-9 лет',
        '10+': '10+ лет'
    };
    return ages[age] || age;
}

// ==========================================
// РЕНДЕРИНГ КАТАЛОГА
// ==========================================

function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}" data-price="${product.price}" data-age="${product.age}" onclick="window.location.href='product.html?id=${product.id}'" style="cursor: pointer;">
            <div class="product-image-wrapper">
                <img src="images/${product.image}" alt="${product.name}" class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <button onclick="favorites.addItem(${product.id}); event.stopPropagation();" 
                        class="btn btn-outline" 
                        style="position: absolute; top: 1rem; left: 1rem; padding: 0.5rem; border-radius: 50%; background: white; z-index: 2;">
                    ${favorites.isInFavorites(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    ${product.price} ₽
                    ${product.oldPrice ? `<span class="product-price-old">${product.oldPrice} ₽</span>` : ''}
                </div>
                <button onclick="cart.addItem(${product.id}); event.stopPropagation();" class="btn btn-primary" style="width: 100%; margin-top: 1rem; z-index: 2; position: relative;">
                    🛒 В корзину
                </button>
            </div>
        </div>
    `).join('');
}

// ==========================================
// ФИЛЬТРАЦИЯ ТОВАРОВ
// ==========================================

function applyFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const ageFilter = document.getElementById('ageFilter');
    const priceFilter = document.getElementById('priceFilter');

    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const selectedAge = ageFilter ? ageFilter.value : 'all';
    const selectedPrice = priceFilter ? priceFilter.value : 'all';

    let filtered = products;

    // Фильтр по категории
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Фильтр по возрасту
    if (selectedAge !== 'all') {
        filtered = filtered.filter(p => p.age === selectedAge);
    }

    // Фильтр по цене
    if (selectedPrice !== 'all') {
        filtered = filtered.filter(p => {
            if (selectedPrice === '0-1000') return p.price <= 1000;
            if (selectedPrice === '1000-2000') return p.price > 1000 && p.price <= 2000;
            if (selectedPrice === '2000-3000') return p.price > 2000 && p.price <= 3000;
            if (selectedPrice === '3000+') return p.price > 3000;
            return true;
        });
    }

    renderProducts(filtered);
}

// ==========================================
// ФУНКЦИИ ДЛЯ СТРАНИЦЫ ТОВАРА (PRODUCT.HTML)
// ==========================================

// Получаем ID товара из URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Загружаем товар по ID
function loadProduct() {
    const productId = getProductIdFromUrl();
    const product = products.find(p => p.id === productId);
    
    const productContainer = document.getElementById('productContainer');
    if (!productContainer) return;
    
    if (!product) {
        productContainer.innerHTML = `
            <div style="text-align: center; padding: 4rem;">
                <div style="font-size: 5rem; margin-bottom: 1rem;">❌</div>
                <h2>Товар не найден</h2>
                <p style="color: var(--gray); margin-bottom: 2rem;">Такого товара не существует</p>
                <a href="catalog.html" class="btn btn-primary">Перейти в каталог</a>
            </div>
        `;
        return;
    }
    
    // Обновляем заголовок страницы
    document.title = `${product.name} - Детский Мир`;
    
    // Отображаем товар
    productContainer.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start;">
            <!-- Изображение товара -->
            <div>
                <div class="card" style="padding: 0; overflow: hidden;">
                    <img src="images/${product.image}" alt="${product.name}" style="width: 100%; border-radius: var(--border-radius);">
                </div>
            </div>

            <!-- Информация о товаре -->
            <div>
                <div style="background: var(--primary-light); color: var(--primary-dark); padding: 0.5rem 1rem; border-radius: var(--border-radius-sm); display: inline-block; font-weight: 600; margin-bottom: 1rem;">
                    ${getCategoryName(product.category)}
                </div>

                <h1 style="margin-bottom: 1rem;">${product.name}</h1>

                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                    <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary-color); font-family: var(--font-heading);">
                        ${product.price} ₽
                    </div>
                    ${product.oldPrice ? `
                    <div style="font-size: 1.5rem; color: var(--gray); text-decoration: line-through;">
                        ${product.oldPrice} ₽
                    </div>
                    ` : ''}
                    ${product.badge ? `
                    <div style="background: var(--gradient-primary); color: white; padding: 0.5rem 1rem; border-radius: var(--border-radius-sm); font-weight: 700;">
                        ${product.badge}
                    </div>
                    ` : ''}
                </div>

                <p style="font-size: 1.1rem; margin-bottom: 2rem; line-height: 1.8;">
                    Качественный товар для детей, изготовлен из безопасных материалов. Отличный подарок для вашего ребенка! Этот товар прошел все проверки качества и соответствует стандартам безопасности для детей.
                </p>

                <div class="card" style="margin-bottom: 2rem;">
                    <h3 style="margin-bottom: 1rem;">Характеристики:</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--light-gray); display: flex; justify-content: space-between;">
                            <span style="font-weight: 600;">Категория:</span>
                            <span>${getCategoryName(product.category)}</span>
                        </li>
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--light-gray); display: flex; justify-content: space-between;">
                            <span style="font-weight: 600;">Рекомендуемый возраст:</span>
                            <span>${getAgeText(product.age)}</span>
                        </li>
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--light-gray); display: flex; justify-content: space-between;">
                            <span style="font-weight: 600;">Материал:</span>
                            <span>Высококачественные безопасные материалы</span>
                        </li>
                        <li style="padding: 0.75rem 0; border-bottom: 1px solid var(--light-gray); display: flex; justify-content: space-between;">
                            <span style="font-weight: 600;">Производитель:</span>
                            <span>Детский Мир</span>
                        </li>
                        <li style="padding: 0.75rem 0; display: flex; justify-content: space-between;">
                            <span style="font-weight: 600;">Страна:</span>
                            <span>Россия</span>
                        </li>
                    </ul>
                </div>

                <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                    <button class="btn btn-primary" style="flex: 1;" onclick="addToCart(${product.id})">
                        🛒 Добавить в корзину
                    </button>
                    <button class="btn btn-outline" onclick="toggleFavorite(${product.id})" id="favoriteBtn">
                        ${favorites.isInFavorites(product.id) ? '❤️ В избранном' : '🤍 В избранное'}
                    </button>
                </div>

                <div class="card" style="background: var(--gradient-soft);">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🚚</div>
                            <div style="font-size: 0.875rem; font-weight: 600;">Доставка 1-3 дня</div>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">✅</div>
                            <div style="font-size: 0.875rem; font-weight: 600;">Гарантия качества</div>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">↩️</div>
                            <div style="font-size: 0.875rem; font-weight: 600;">Возврат 30 дней</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Показываем похожие товары
    showSimilarProducts(product);
}

// Показываем похожие товары
function showSimilarProducts(currentProduct) {
    const similarProductsContainer = document.getElementById('similarProducts');
    if (!similarProductsContainer) return;
    
    const similar = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (similar.length === 0) {
        similarProductsContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1; color: var(--gray);">Нет похожих товаров</p>';
        return;
    }
    
    similarProductsContainer.innerHTML = similar.map(product => `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'" style="cursor: pointer;">
            <div class="product-image-wrapper">
                <img src="images/${product.image}" alt="${product.name}" class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    ${product.price} ₽
                    ${product.oldPrice ? `<span class="product-price-old">${product.oldPrice} ₽</span>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// ГЛОБАЛЬНЫЕ ФУНКЦИИ ДЛЯ HTML
// ==========================================

// Функции для страницы товара
window.addToCart = function(productId) {
    cart.addItem(productId);
};

window.toggleFavorite = function(productId) {
    favorites.addItem(productId);
    // Обновляем текст кнопки
    const button = document.getElementById('favoriteBtn');
    if (button) {
        button.textContent = favorites.isInFavorites(productId) ? '❤️ В избранном' : '🤍 В избранное';
    }
};

// Функция оформления заказа из корзины
window.checkout = function() {
    if (cart.items.length === 0) {
        alert('Корзина пуста! Добавьте товары из каталога.');
        return;
    }

    const confirmed = confirm(`Оформить заказ на сумму ${cart.getTotal()} ₽?`);
    if (confirmed) {
        alert('Спасибо за заказ! Наш менеджер свяжется с вами в ближайшее время.');
        cart.clearCart();
    }
};

// ==========================================
// ИНИЦИАЛИЗАЦИЯ
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    // Рендерим товары на странице каталога
    if (document.getElementById('productsGrid')) {
        renderProducts();
    }

    // Рендерим корзину на странице корзины
    if (document.getElementById('cartItems')) {
        cart.renderCartPage();
    }

    // Рендерим избранное на странице избранного
    if (document.getElementById('favoritesGrid')) {
        favorites.renderFavoritesPage();
    }

    // Загружаем товар на странице товара
    if (window.location.pathname.includes('product.html')) {
        loadProduct();
    }

    // Обновляем счетчики
    cart.updateCartUI();
    favorites.updateFavoritesUI();
    
    // Инициализация мобильного меню
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Закрываем меню при клике на ссылку
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Инициализация фильтров из URL параметров
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category && document.getElementById('categoryFilter')) {
        document.getElementById('categoryFilter').value = category;
        applyFilters();
    }
});