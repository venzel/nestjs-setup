# Setup

## Init prisma with postgres

```bash
npx prisma init --datasource-provider postgresql
```

## Generate migration produts

```bash
npx prisma migrate dev --name product
```

## Execute push

```bash
npx prisma db push
```

## Execute seed

```bash
npx prisma db seed
```

## Show prisma studio

```bash
npx prisma studio
```

## Generate resource

```bash
nest generate resource
```

## Generate prisma exceptions

```bash
nest generate filter prisma-client-exception
```
