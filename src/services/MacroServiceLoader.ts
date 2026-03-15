export class MicroLoader {
  private static loadedScripts = new Map<string, any>();

  static async load(url: string) {
    const module = await import(/* @vite-ignore */ url);
    console.log(11111, module);
    this.loadedScripts.set(url, module);

    return module;
  }
}
