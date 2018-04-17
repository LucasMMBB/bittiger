package mao;

/**
 * Singleton class
 * Initial method: Using inner class
 * */
public class SingletonInnerClass {
    private static class SingletonHolder {
        private static final SingletonInnerClass INSTANCE = new SingletonInnerClass();
    }

    private SingletonInnerClass(){}

    public static final SingletonInnerClass getInstance(){
        return SingletonHolder.INSTANCE;
    }

}
