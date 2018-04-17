package mao;

/**
 * Singleton class
 * Initial method: Hungry
 * */
public class SingletonHungry {

    private SingletonHungry(){
    }

    private static SingletonHungry instance = new SingletonHungry();

    public static SingletonHungry getInstance(){
        return instance;
    }
}
