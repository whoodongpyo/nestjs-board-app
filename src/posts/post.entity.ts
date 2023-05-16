import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { PostStatus } from './post.model';

export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: PostStatus;
}
