package mao;

/**
 * Singleton class
 * Initial method: Double check
 * */
public class SingletonDoubleCheck {

    private static volatile SingletonDoubleCheck instance = null;

    private SingletonDoubleCheck(){
    }

    public static SingletonDoubleCheck getInstance(){
        //go to synchronized only when instance is null
        if(instance == null){
            synchronized (SingletonDoubleCheck.class){
                // make sure only one instance is created
                if(instance == null) instance = new SingletonDoubleCheck();
            }
        }
        return instance;
    }
}
