import { VoteComponent } from './vote.component'; 

/* 
  Testing component state with Triple A Structure
  (Arrange, Act and Assert)
 */
describe('VoteComponent', () => {  
  let component: VoteComponent;

  beforeEach(() => {
    // set up
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {  
    component.upVote();

    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    component.downVote();
    
    expect(component.totalVotes).toBe(-1);
  });  
});