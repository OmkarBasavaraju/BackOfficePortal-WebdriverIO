class EnvConfig {
  private environmentUrl = "https://nextgenbo.demo.devtls.net";

  get getEnvironmentUrl() {
    return this.environmentUrl;
  }
}
export default new EnvConfig();
