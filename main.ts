import {Category} from './src/domain/category/category'
class Application {
    run() {
        const category = new Category("Andre")
        console.log("Running!", category.getName())
    }
}

new Application().run();