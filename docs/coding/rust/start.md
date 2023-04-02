# 如何创建并运行
### 运行命令
```shell
cargo new hello-rust
```
对于目录结构
```
hello-rust
|- Cargo.toml
|- src
  |- main.rs
```
`Cargo.toml` 为 Rust 的清单文件。其中包含了项目的元数据和依赖库。
`src/main.rs` 为编写应用代码的地方。
### 添加依赖
在 `Cargo.toml` 的 dependencies 下添加依赖配置
例如：
```toml
[dependencies]
ferris-says = "0.2"
```
### 安装依赖
```shell
cargo build
```
### 运行项目
```shell
cargo run
```
### 一些问题
#### 输出
输出使用 `println!`，注意末尾有个感叹号 `!` 。
它是一个宏（macros），可以将文本输出到控制台（console）
#### 项目配置
注意项目名称需要使用下划线连接而不是驼峰法