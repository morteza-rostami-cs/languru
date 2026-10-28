class Config {
  constructor(env) {
    this.nodeEnv = env.NODE_ENV;
    this.port = env.PORT;
  }
}

const config = new Config(process.env);
export default config;
