abstract class Picker<T> {
    public abstract pick(): Promise<T>;
}

export default Picker;