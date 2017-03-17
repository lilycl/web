<div class="bg-white" id="feedback-header">
<topbar title="意见反馈"></topbar>
<div  id="feedback">
<mt-field 
	label="" 
	:value.sync="feedback"
	placeholder="您的建议对我们十分重要     字数请控制在120个字以内~" 
	type="textarea" 
	rows="9"

></mt-field>
<li class="base-newadd" @click="submit">提交</li>
</div>
</div>