import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PostStatus } from './post-status-enum';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: PostStatus;
}
